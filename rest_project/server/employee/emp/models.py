from django.db import models

# Create your models here.

class EmpModel(models.Model):
    empname=models.CharField(max_length=100)
    age=models.IntegerField()
    phone=models.IntegerField()
    department=models.CharField(max_length=100)
    email=models.EmailField()