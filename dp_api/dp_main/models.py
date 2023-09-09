from django.db import models
from django.contrib.auth.models import User
class Documents(models.Model):
    user=models.ForeignKey(
    User,
    on_delete=models.CASCADE,
    blank=True,
    null=True,
)
    file=models.FileField(upload_to="notes")

