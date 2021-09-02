
from authentication.models import User
from rest_framework import serializers
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth import authenticate

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
