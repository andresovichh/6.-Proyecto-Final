# Generated by Django 4.0.5 on 2022-06-13 20:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cmoney', '0003_pump'),
    ]

    operations = [
        migrations.AddField(
            model_name='pump',
            name='customer',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='cmoney.customers'),
        ),
    ]
