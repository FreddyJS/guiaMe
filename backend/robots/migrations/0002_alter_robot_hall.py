# Generated by Django 4.0.2 on 2022-04-19 20:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('robots', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='robot',
            name='hall',
            field=models.TextField(default='pasillo0'),
        ),
    ]