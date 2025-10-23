import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Tour {
  id: number;
  title: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  category: string;
}

const tours: Tour[] = [
  {
    id: 1,
    title: 'Обзорная экскурсия по Красноярску',
    description: 'Познакомьтесь с главными достопримечательностями города: Театральной площадью, набережной Енисея, Коммунальным мостом и часовней Параскевы Пятницы.',
    duration: '3 часа',
    price: '2500₽',
    image: 'https://cdn.poehali.dev/projects/bf471408-cd70-4e89-bb9d-4a878cfa703d/files/a67c2f48-6ff7-4fdb-888a-2c94ae0ef310.jpg',
    category: 'Городские'
  },
  {
    id: 2,
    title: 'Заповедник Столбы',
    description: 'Увлекательное путешествие к знаменитым скалам-останцам. Треккинг по живописным тропам с профессиональным гидом.',
    duration: '5 часов',
    price: '3500₽',
    image: 'https://cdn.poehali.dev/projects/bf471408-cd70-4e89-bb9d-4a878cfa703d/files/5f22b09d-4475-41f1-a434-45c5989eddb5.jpg',
    category: 'Природные'
  },
  {
    id: 3,
    title: 'Вечерний Красноярск',
    description: 'Романтическая прогулка по вечернему городу с посещением смотровых площадок и подсветкой достопримечательностей.',
    duration: '2.5 часа',
    price: '2000₽',
    image: 'https://cdn.poehali.dev/projects/bf471408-cd70-4e89-bb9d-4a878cfa703d/files/dfa1261e-4609-438b-ba53-12c29b413cdf.jpg',
    category: 'Городские'
  }
];

const reviews = [
  {
    name: 'Анна Смирнова',
    text: 'Потрясающая экскурсия на Столбы! Гид очень увлечённый и знающий. Обязательно вернёмся ещё!',
    rating: 5,
    date: 'Октябрь 2024'
  },
  {
    name: 'Дмитрий Иванов',
    text: 'Прекрасная обзорная экскурсия. Узнали много нового о городе, увидели красивейшие места.',
    rating: 5,
    date: 'Сентябрь 2024'
  },
  {
    name: 'Елена Петрова',
    text: 'Вечерняя экскурсия просто волшебная! Город в огнях — это незабываемо.',
    rating: 5,
    date: 'Август 2024'
  }
];

const galleryImages = [
  'https://cdn.poehali.dev/projects/bf471408-cd70-4e89-bb9d-4a878cfa703d/files/a67c2f48-6ff7-4fdb-888a-2c94ae0ef310.jpg',
  'https://cdn.poehali.dev/projects/bf471408-cd70-4e89-bb9d-4a878cfa703d/files/5f22b09d-4475-41f1-a434-45c5989eddb5.jpg',
  'https://cdn.poehali.dev/projects/bf471408-cd70-4e89-bb9d-4a878cfa703d/files/dfa1261e-4609-438b-ba53-12c29b413cdf.jpg'
];

export default function Index() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={28} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">Красноярск Тур</h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('tours')} className="text-sm font-medium hover:text-primary transition-colors">Экскурсии</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('gallery')} className="text-sm font-medium hover:text-primary transition-colors">Галерея</button>
              <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('booking')} className="text-sm font-medium hover:text-primary transition-colors">Бронирование</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
            </div>
          </div>
        </nav>
      </header>

      <section id="home" className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
        <img 
          src="https://cdn.poehali.dev/projects/bf471408-cd70-4e89-bb9d-4a878cfa703d/files/a67c2f48-6ff7-4fdb-888a-2c94ae0ef310.jpg" 
          alt="Красноярск" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">Откройте красоту Красноярска</h2>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">Авторские экскурсии по живописным местам Сибири</p>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('tours')}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-xl"
          >
            <Icon name="Compass" size={20} className="mr-2" />
            Выбрать экскурсию
          </Button>
        </div>
      </section>

      <section id="tours" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Наши экскурсии</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Выберите маршрут по душе — от городских прогулок до приключений на природе</p>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="city">Городские</TabsTrigger>
              <TabsTrigger value="nature">Природные</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {tours.map(tour => (
                <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle className="text-xl">{tour.title}</CardTitle>
                    <CardDescription>{tour.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Clock" size={16} />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="text-2xl font-bold text-primary">{tour.price}</div>
                    </div>
                    <Button 
                      className="w-full" 
                      onClick={() => {
                        setSelectedTour(tour);
                        scrollToSection('booking');
                      }}
                    >
                      Забронировать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="city" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {tours.filter(t => t.category === 'Городские').map(tour => (
                <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle className="text-xl">{tour.title}</CardTitle>
                    <CardDescription>{tour.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Clock" size={16} />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="text-2xl font-bold text-primary">{tour.price}</div>
                    </div>
                    <Button 
                      className="w-full" 
                      onClick={() => {
                        setSelectedTour(tour);
                        scrollToSection('booking');
                      }}
                    >
                      Забронировать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="nature" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {tours.filter(t => t.category === 'Природные').map(tour => (
                <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle className="text-xl">{tour.title}</CardTitle>
                    <CardDescription>{tour.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Clock" size={16} />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="text-2xl font-bold text-primary">{tour.price}</div>
                    </div>
                    <Button 
                      className="w-full" 
                      onClick={() => {
                        setSelectedTour(tour);
                        scrollToSection('booking');
                      }}
                    >
                      Забронировать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Об экскурсоводе</h2>
            </div>
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-8">
                  <Avatar className="w-48 h-48">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="text-4xl bg-primary text-white">МИ</AvatarFallback>
                  </Avatar>
                </div>
                <div className="md:w-2/3 p-8">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-3xl">Михаил Игнатов</CardTitle>
                    <CardDescription className="text-lg">Профессиональный гид по Красноярску</CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 space-y-4">
                    <p className="text-muted-foreground">
                      Более 10 лет провожу экскурсии по родному городу и его окрестностям. Влюблён в Красноярск и знаю каждый его уголок.
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="flex items-start gap-3">
                        <Icon name="Award" size={24} className="text-primary flex-shrink-0" />
                        <div>
                          <div className="font-semibold">500+ экскурсий</div>
                          <div className="text-sm text-muted-foreground">Проведено</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Users" size={24} className="text-primary flex-shrink-0" />
                        <div>
                          <div className="font-semibold">1000+ туристов</div>
                          <div className="text-sm text-muted-foreground">Довольных гостей</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Галерея</h2>
            <p className="text-lg text-muted-foreground">Красота Красноярска в фотографиях</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow aspect-square">
                <img src={img} alt={`Галерея ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы</h2>
            <p className="text-lg text-muted-foreground">Что говорят наши гости</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Avatar>
                      <AvatarFallback className="bg-secondary text-white">{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription className="text-sm">{review.date}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Бронирование</h2>
              <p className="text-lg text-muted-foreground">Заполните форму и мы свяжемся с вами в ближайшее время</p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-6" onSubmit={(e) => {
                  e.preventDefault();
                  alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
                }}>
                  {selectedTour && (
                    <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                      <div className="font-semibold text-primary mb-1">Выбранная экскурсия:</div>
                      <div className="text-lg font-bold">{selectedTour.title}</div>
                      <div className="text-sm text-muted-foreground">{selectedTour.duration} • {selectedTour.price}</div>
                    </div>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Иван Иванов" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="example@mail.ru" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Желаемая дата</Label>
                    <Input id="date" type="date" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="people">Количество человек</Label>
                    <Input id="people" type="number" min="1" defaultValue="1" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea id="message" placeholder="Дополнительные пожелания..." rows={4} />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground">Свяжитесь с нами удобным способом</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="Phone" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle className="mb-2">Телефон</CardTitle>
                <a href="tel:+79991234567" className="text-muted-foreground hover:text-primary transition-colors">
                  +7 (999) 123-45-67
                </a>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="Mail" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle className="mb-2">Email</CardTitle>
                <a href="mailto:info@krsktour.ru" className="text-muted-foreground hover:text-primary transition-colors">
                  info@krsktour.ru
                </a>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="MapPin" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle className="mb-2">Адрес</CardTitle>
                <p className="text-muted-foreground">
                  г. Красноярск<br />
                  ул. Ленина, 123
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={24} className="text-primary" />
              <span className="font-bold text-xl">Красноярск Тур</span>
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm opacity-80">© 2024 Красноярск Тур. Все права защищены.</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="MessageCircle" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
