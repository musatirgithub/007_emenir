# Generated by Django 4.1.4 on 2023-05-16 07:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='arac',
            name='yil',
            field=models.SmallIntegerField(blank=True, null=True),
        ),
    ]