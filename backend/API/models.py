from django.db import models

# Create your models here.
class comment(models.Model):
    creator = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now=True)
    content = models.TextField()
