from django.db import models

class Colors(models.TextChoices):
    NOIR = "#000000"
    BLANC = "#ffffff"
    ROUGE = "#ff0000"
    JAUNE = "#ffff00"
    GRIS = '#808080'

class Product(models.Model):
    name = models.CharField(max_length=150)
    image = models.ImageField(upload_to="photos/%Y/%m/%d/")
    description = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    color = models.CharField(max_length=13, choices=Colors.choices, default=Colors.BLANC)
    stock = models.IntegerField(blank=True)
    quantity = models.IntegerField(blank=False)
    created_at = models.DateField(auto_now_add=True)