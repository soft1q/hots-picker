from django.db import models
from django.contrib.auth.models import User
from heroes.models import Hero

class Record(models.Model):
    hero_1 = models.ForeignKey(Hero, on_delete=models.PROTECT, related_name='blue_team_1')
    hero_2 = models.ForeignKey(Hero, on_delete=models.PROTECT, related_name='blue_team_2')
    hero_3 = models.ForeignKey(Hero, on_delete=models.PROTECT, related_name='blue_team_3')
    hero_4 = models.ForeignKey(Hero, on_delete=models.PROTECT, related_name='blue_team_4')
    hero_5 = models.ForeignKey(Hero, on_delete=models.PROTECT, related_name='blue_team_5')
    hero_6 = models.ForeignKey(Hero, on_delete=models.PROTECT, related_name='red_team_1')
    hero_7 = models.ForeignKey(Hero, on_delete=models.PROTECT, related_name='red_team_2')
    hero_8 = models.ForeignKey(Hero, on_delete=models.PROTECT, related_name='red_team_3')
    hero_9 = models.ForeignKey(Hero, on_delete=models.PROTECT, related_name='red_team_4')
    hero_10 = models.ForeignKey(Hero, on_delete=models.PROTECT, related_name='red_team_5')
    owner = models.ForeignKey(User, related_name='match_history', on_delete=models.CASCADE, null=True)
    match_time = models.DateTimeField(auto_now_add=True)