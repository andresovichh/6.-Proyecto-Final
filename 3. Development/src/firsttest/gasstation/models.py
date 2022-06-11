from django.db import models

# Create your models here.
class Gasstation(models.Model):
    name = models.TextField()
    description = models.TextField()
    location = models.TextField()