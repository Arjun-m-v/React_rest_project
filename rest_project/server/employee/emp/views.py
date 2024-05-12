from django.shortcuts import render
from .models import EmpModel
from .serializers import EmpSerializers
from rest_framework.viewets import ModelViewSet

# Create your views here.

class EmpModelViewSet(ModelViewSet):
    serializer_class=EmpSerializers
    queryset=EmpModel.objects.all()