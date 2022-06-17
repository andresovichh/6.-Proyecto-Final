# Generated by Django 4.0.5 on 2022-06-14 15:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cmoney', '0004_pump_customer'),
    ]

    operations = [
        migrations.CreateModel(
            name='Transactions',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('trans_id', models.IntegerField(default=0)),
                ('cripto_id', models.CharField(max_length=1024)),
                ('amount_uy', models.FloatField(default=0)),
                ('exchange', models.FloatField(default=0)),
                ('amount_cr', models.FloatField(default=0)),
                ('fee_cr', models.FloatField(default=0)),
                ('total', models.FloatField(default=0)),
                ('created_pump', models.DateTimeField(auto_now=True)),
                ('updated_pum0', models.DateTimeField(auto_now_add=True)),
                ('pump_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cmoney.pump')),
            ],
        ),
    ]
