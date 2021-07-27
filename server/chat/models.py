from django.db import models
from django.core.exceptions import ValidationError


class Room(models.Model):
    name = models.CharField(max_length=15)
    description = models.TextField()
    private = models.BooleanField(default=False)
    password = models.CharField(max_length=15, null=True, blank=True)
    
    def clean(self):
        if self.private is True and self.password is None or self.password is "":
            raise ValidationError('private room need a password')

        if len(self.password) < 8 :
            raise ValidationError('too short password')


# class Message(models.Model):
#     username = models.CharField(max_length=20)
#     date = models.DateTimeField()
#     room = models.ForeignKey(Room)
#     content = models.CharField(max_length=5000)