# Generated by Django 4.0.2 on 2022-04-13 15:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stats', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='stats',
            name='robot_id',
            field=models.CharField(max_length=25),
        ),
    ]
