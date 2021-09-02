
from authentication.models import User
from rest_framework import serializers
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth import authenticate
from rest_framework_simplejwt.exceptions import TokenError
from rest_framework_simplejwt.tokens import RefreshToken
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length = 30,min_length = 6, write_only = True)

    class Meta:
        model = User
        fields = ('username','email','password',)

        def create(self,validated_data):
            return User.objects.create_user(**validated_data)

class LoginSerializer(serializers.ModelSerializer):

        username = serializers.CharField(max_length=50, min_length=3)
        password = serializers.CharField(
            max_length=128, min_length=6,write_only=True)
        tokens = serializers.SerializerMethodField()

        def get_tokens(self, userObj):
            user = User.objects.get(username=userObj['username'])

            return {
                'refresh': user.tokens()['refresh'],
                'access': user.tokens()['access']
            }

        def validate(self, attrs):

            username = attrs.get('username', '')
            password = attrs.get('password', '')
            print(username)
            print(password)
            user = authenticate(username=username, password=password)
            print(user)
            if not user:
                raise AuthenticationFailed('Invalid credentials, try again')

            return {
                'username': user.username,
                'id': user.id,
                'tokens': user.tokens
            }

        class Meta:
            model = User
            fields = ['id','username', 'password', 'tokens']


class LogoutSerializer(serializers.Serializer):
    refresh = serializers.CharField()
    default_error_messages = {
        'bad_token': ('Token is expired or invalid')
    }

    def validate(self, attrs):
        self.token = attrs['refresh']

        return attrs

    def save(self, **kwargs):
        try:
            RefreshToken(self.token).blacklist()
        except TokenError:
            self.fail("bad_token")