# Generated by Django 4.0.2 on 2022-04-26 15:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('routes', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='route',
            name='dest_room',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='route',
            name='origin_room',
            field=models.TextField(),
        ),
    ]
