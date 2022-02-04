from django.shortcuts import render 
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Product
from .serializers import ProductSerializer

class ProductListView(ListAPIView):
    queryset = Product.objects.all().order_by('-created_at')
    serializer_class = ProductSerializer
    permission_classes = (permissions.AllowAny, )
    
class ProductDetailView(RetrieveAPIView):
    queryset = Product.objects.order_by('-id')
    serializer_class = ProductSerializer
    permission_classes = (permissions.AllowAny, )