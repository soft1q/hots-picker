from django.db import models

class Hero(models.Model):
    name = models.CharField(max_length=20)
    icon = models.ImageField()