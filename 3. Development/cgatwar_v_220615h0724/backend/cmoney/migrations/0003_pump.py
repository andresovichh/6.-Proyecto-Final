# Generated by Django 4.0.5 on 2022-06-13 20:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cmoney', '0002_gasstations'),
    ]

    operations = [
        migrations.CreateModel(
            name='Pump',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('wallet_id', models.CharField(max_length=400)),
                ('wallet_name', models.CharField(max_length=45)),
                ('created_pump', models.DateTimeField(auto_now=True)),
                ('updated_pum0', models.DateTimeField(auto_now_add=True)),
                ('gas_st', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cmoney.gasstations')),
            ],
        ),
    ]