from rest_framework import status
from rest_framework.generics import CreateAPIView,RetrieveAPIView,GenericAPIView
from .serializer import LoginSerializer, RegisterSerializer, LogoutSerializer
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
class RegisterView(CreateAPIView):
    permission_classes =[]
    authentication_classes =[]
    serializer_class = RegisterSerializer
    def post(self,request):
        serializer= self.serializer_class(data=self.request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()

            return Response(serializer.data,status=status.HTTP_201_CREATED)

class LoginView(GenericAPIView):
    permission_classes =[]
    authentication_classes =[]
    serializer_class = LoginSerializer

    def post(self,request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class LogoutView(GenericAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = LogoutSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(status=status.HTTP_204_NO_CONTENT)