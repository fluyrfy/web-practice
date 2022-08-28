# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class XzCart(models.Model):
    lid = models.IntegerField(blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    count = models.IntegerField(blank=True, null=True)
    lname = models.CharField(max_length=255, blank=True, null=True)
    uid = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'xz_cart'


class XzLaptop(models.Model):
    lid = models.AutoField(primary_key=True)
    lname = models.CharField(max_length=50, blank=True, null=True)
    img_url = models.CharField(max_length=255, blank=True, null=True)
    price = models.CharField(max_length=10, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'xz_laptop'


class XzLogin(models.Model):
    uname = models.CharField(max_length=50, blank=True, null=True)
    upwd = models.CharField(max_length=32, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'xz_login'
