# Generated by Django 5.1.3 on 2024-11-15 17:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_alter_pole_id_alter_pole_length'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pole',
            name='id',
            field=models.CharField(default='232766', max_length=6, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='pole',
            name='material',
            field=models.CharField(choices=[('C', 'Carbon'), ('F', 'Fiberglass')], max_length=1),
        ),
        migrations.AlterField(
            model_name='pole',
            name='rental_cost',
            field=models.DecimalField(decimal_places=2, max_digits=5),
        ),
        migrations.AlterField(
            model_name='pole',
            name='replacement_cost',
            field=models.DecimalField(decimal_places=2, max_digits=5),
        ),
    ]
