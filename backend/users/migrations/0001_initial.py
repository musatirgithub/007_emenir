# Generated by Django 4.1.4 on 2023-07-18 14:08

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('kimlik_no', models.CharField(blank=True, max_length=11, null=True)),
                ('isim', models.CharField(blank=True, max_length=25, null=True)),
                ('soyisim', models.CharField(blank=True, max_length=25, null=True)),
                ('iban', models.CharField(blank=True, max_length=26, null=True)),
                ('phone', models.CharField(blank=True, max_length=10, null=True)),
                ('address', models.CharField(blank=True, max_length=200, null=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='profiles', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
