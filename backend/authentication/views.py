from rest_framework import status
from rest_framework.generics import CreateAPIView,RetrieveAPIView
from .serializer import LoginSerializer, RegisterSerializer
from rest_framework.response import Response
class RegisterView(CreateAPIView):
    permission_classes =[]
    authentication_classes =[]
    serializer_class = RegisterSerializer
    def post(self,request):
        serializer= self.serializer_class(data=self.request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()

            return Response(serializer.data,status=status.HTTP_201_CREATED)

class LoginView(RetrieveAPIView):
    permission_classes =[]
    authentication_classes =[]
    serializer_class = LoginSerializer

    def post(self,request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=status.HTTP_200_OK)