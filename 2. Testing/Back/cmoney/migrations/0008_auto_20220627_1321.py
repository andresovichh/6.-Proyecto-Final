# Generated by Django 3.2.13 on 2022-06-27 13:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cmoney', '0007_auto_20220624_1026'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pump',
            name='wallet_id',
        ),
        migrations.AlterField(
            model_name='pump',
            name='id',
            field=models.CharField(max_length=400, primary_key=True, serialize=False, unique=True),
        ),
    ]
