# Generated by Django 3.2.13 on 2022-06-20 23:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cmoney', '0002_auto_20220620_2350'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transactions',
            name='mount_cr',
            field=models.FloatField(default=0),
        ),
    ]