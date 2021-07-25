from django.db import models


class Room(models.Model):
    name = models.CharField(max_length=15)
    description = models.TextField()
    private = models.BooleanField(default=False)
    password = models.CharField(max_length=15, null=True, blank=True)
