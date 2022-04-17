import pygame
import random
import os

FPS=60
WHITE=(255,255,255)
WIDTH=500
HEIGHT=600

GREEN=(0,255,0)
RED=(255,0,0)
YELLOW=(255,255,0)
BLACK=(0,0,0)

# 遊戲初始化and創建視窗
pygame.init()
pygame.mixer.init()
screen=pygame.display.set_mode((WIDTH,HEIGHT))
pygame.display.set_caption("星際大戰")
clock=pygame.time.Clock()

#載入圖片
background_img = pygame.image.load(os.path.join("img", "background.png")).convert() #將圖片轉換成pygame較易讀取的格式
player_img = pygame.image.load(os.path.join("img", "player.png")).convert() #將圖片轉換成pygame較易讀取的格式
# rock_img=pygame.image.load(os.path.join("img", "rock.png")).convert() #將圖片轉換成pygame較易讀取的格式
bullet_img = pygame.image.load(os.path.join("img", "bullet.png")).convert() #將圖片轉換成pygame較易讀取的格式
rock_imgs = []
for i in range(7):
  rock_imgs.append(pygame.image.load(os.path.join("img", f"rock{i}.png")).convert())

# expl_anim = {}
# expl_anim[ 'lg' ] = []
# expl_anim[ 'sm' ] = []
# for i in range(9):
#   expl_img = pygame.image.load(os.path.join("\img\img", f"expl{i}")).convert()
#   expl_img.set_colorkey(BLACK)
#   expl_anim['lg'].append(pygame.transform.scale(expl_img, (75, 75)))
#   expl_anim['sm'].append(pygame.transform.scale(expl_img, (30, 30)))


#載入音樂
shoot_sound = pygame.mixer.Sound(os.path.join("sound", "shoot.wav"))
expl_sounds = [
  pygame.mixer.Sound(os.path.join("sound", "expl0.wav")),
  pygame.mixer.Sound(os.path.join("sound", "expl1.wav"))
]
pygame.mixer.music.load(os.path.join("sound", "background.ogg"))
pygame.mixer.music.set_volume(0.5)

font_name = pygame.font.match_font('arial') #尋找電腦裡字體進行匹配
def draw_text(surf, text, size, x, y):
  font = pygame.font.Font(font_name, size) #傳入文字類型和大小
  text_surface = font.render(text, True, WHITE) #渲染
  text_rect = text_surface.get_rect() #定位
  text_rect.centerx = x
  text_rect.top = y
  surf.blit(text_surface, text_rect)

#產生新石頭
def new_rock():
  r = Rock()
  all_sprites.add(r)
  rocks.add(r)

def draw_health(surf, hp, x, y):
  if hp < 0:
    hp = 0
  BAR_LENGTH = 100
  BAR_HEIGHT = 10
  fill = (hp/100) * BAR_LENGTH
  outline_rect = pygame.Rect(x, y, BAR_LENGTH, BAR_HEIGHT)
  fill_rect = pygame.Rect(x, y, fill, BAR_HEIGHT)
  pygame.draw.rect(surf, GREEN, fill_rect)
  pygame.draw.rect(surf, WHITE, outline_rect, 2) #第四個參數為邊框粗細，有添加矩形才會只有邊框


class Player(pygame.sprite.Sprite):
  def __init__(self):
    pygame.sprite.Sprite.__init__(self)
    self.image=pygame.transform.scale(player_img, (50,38)) #將圖片大小重新定義
    self.image.set_colorkey(BLACK) #將參數顏色變為透明
    # self.image.fill(GREEN)
    self.rect=self.image.get_rect()
    # self.rect.center=(WIDTH/2,HEIGHT/2)
    self.radius=20
    # pygame.draw.circle(self.image, RED, self.rect.center, self.radius) 著色測試半徑大小
    self.rect.centerx=WIDTH/2
    self.rect.bottom=HEIGHT - 10
    self.speedx=8
    self.health = 100

  def update(self):
    key_pressed=pygame.key.get_pressed()
    if key_pressed[pygame.K_RIGHT]:
      self.rect.x+=self.speedx
    if key_pressed[pygame.K_LEFT]:
      self.rect.x-=self.speedx

    if self.rect.right>WIDTH:
      self.rect.right=WIDTH
    if self.rect.left<0:
      self.rect.left=0
    # self.rect.x+=2
    # if self.rect.left>WIDTH:
    #   self.rect.right=0
  def shoot(self):
    bullet=Bullet(self.rect.centerx, self.rect.top)
    all_sprites.add(bullet)
    bullets.add(bullet)
    shoot_sound.play()



class Rock(pygame.sprite.Sprite):
  def __init__(self):
    pygame.sprite.Sprite.__init__(self)
    # self.image=pygame.Surface((30,40))
    self.image_ori= random.choice(rock_imgs)
    self.image_ori.set_colorkey(BLACK) #將參數顏色變為透明
    self.image=self.image_ori.copy()
    # self.image.fill(RED)
    self.rect=self.image.get_rect()
    # self.rect.center=(WIDTH/2,HEIGHT/2)
    self.radius=int(self.rect.width*0.85/2)
    # pygame.draw.circle(self.image, RED, self.rect.center, self.radius) 著色測試半徑大小
    self.rect.centerx=random.randrange(0, WIDTH - self.rect.width)
    self.rect.centery=random.randrange(-180, -100)
    self.speedy=random.randrange(2, 10)
    self.speedx=random.randrange(-3, 3) #只寫正數的話只會往右邊遞增(往右掉)
    self.total_degree=0
    self.rot_degree = random.randrange(-3, 3)

  def rotate(self):
    self.total_degree += self.rot_degree
    self.total_degree = self.total_degree % 360
    self.image=pygame.transform.rotate(self.image_ori, self.total_degree) #要轉動的圖片與角度 轉動後會造成圖片失真
    center=self.rect.center
    self.rect = self.image.get_rect()
    self.rect.center = center

  def update(self):
    self.rotate()
    self.rect.y+=self.speedy
    self.rect.x+=self.speedx
    if self.rect.top>HEIGHT or self.rect.left > WIDTH or self.rect.right < 0:
      self.rect.centerx=random.randrange(0, WIDTH - self.rect.width)
      self.rect.centery=random.randrange(-100, -40)
      self.speedy=random.randrange(2, 10)
      self.speedx=random.randrange(-3, 3)

class Bullet(pygame.sprite.Sprite):
  def __init__(self, x, y):
    pygame.sprite.Sprite.__init__(self)
    # self.image=pygame.Surface((10,20))
    self.image=bullet_img
    # self.image.fill(YELLOW )
    self.rect=self.image.get_rect()
    # self.rect.center=(WIDTH/2,HEIGHT/2)
    self.rect.centerx=x
    self.rect.centery=y
    self.speedy=-10

  def update(self):
    self.rect.y+=self.speedy
    if self.rect.bottom < 0:
      self.kill() #從所有sprite中移除此sprite

class Explosion(pygame.sprite.Sprite):
  def __init__(self, center, size):
    pygame.sprite.Sprite.__init__(self)
    # self.image=pygame.Surface((10,20))
    self.image = expl_anim[self.size][0]
    # self.image.fill(YELLOW )
    self.rect=self.image.get_rect()
    # self.rect.center=(WIDTH/2,HEIGHT/2)
    self.rect.center= center
    self.frame = 0
    self.last_update = pygame.time.get_ticks() #經過的毫秒數
    self.frame_rate = 50 #過多久才播放下一張

  def update(self):
    now = pygame.time.get_ticks()
    # if now - self.last_update > self.frame_rate:
    #   self.





all_sprites=pygame.sprite.Group()
rocks = pygame.sprite.Group()
bullets = pygame.sprite.Group()
player=Player()
all_sprites.add(player)
for i in range(8):
  new_rock()

score=0

pygame.mixer.music.play(-1) #-1代表重複播放

running=True

# 遊戲迴圈
while running:
  clock.tick(FPS)
  #取得輸入
  for event in pygame.event.get():
    if event.type == pygame.QUIT:
      running=False
    elif event.type == pygame.KEYDOWN:
      if event.key == pygame.K_SPACE:
        player.shoot()
  #更新遊戲
  all_sprites.update()
  hits = pygame.sprite.groupcollide(rocks, bullets, True, True) #子彈碰撞石頭
  for hit in hits:
    random.choice(expl_sounds).play
    score+=hit.radius
    # r = Rock()
    # all_sprites.add(r)
    # rocks.add(r)
    new_rock()

  hits = pygame.sprite.spritecollide(player, rocks, True, pygame.sprite.collide_circle) #石頭碰撞玩家
  # if hits :
  #   running = False
  for hit in hits:
    # r = Rock()
    # all_sprites.add(r)
    # rocks.add(r)
    new_rock()
    player.health -= hit.radius
    if player.health <= 0:
      running = False


  #畫面顯示
  screen.fill((BLACK))
  screen.blit(background_img, (0,0))
  all_sprites.draw(screen)
  draw_text(screen, str(score), 18, WIDTH/2, 10)
  draw_health(screen, player.health, 5, 15)
  pygame.display.update()

pygame.quit()
