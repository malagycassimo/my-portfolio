import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, Github, Linkedin, Menu, X, Code2, Database, Server, BarChart3, Shield, Wrench, Cloud, Smartphone, Palette, Boxes } from "lucide-react";
import { toast } from "sonner";
import profileImage from "@/assets/Malagy.jpg";
import projectAcademic from "@/assets/project-academic.png";
import projectCareer from "@/assets/project-career.png";
import projectDelivery from "@/assets/project-delivery.png";
import projectIot from "@/assets/project-iot.jpg";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }
    toast.success("Mensagem enviada com sucesso! Entrarei em contacto em breve.");
    setFormData({ name: "", email: "", message: "" });
  };

  const projects = [
    {
      title: "Sistema de Apoio aos servicos de desenvolvimento de carreias da UEM",
      description: "Sistema de apoio ao desenvolvimento profissional, conectando estudantes a oportunidades de carreira",
      tech: ["React", "Node.js", "Firebase"],
      image: projectAcademic,
      details: "Plataforma desenvolvida para o Centro de Desenvolvimento de Carreiras da UEM, facilitando a conexão entre estudantes e empresas. O sistema permite a publicação de vagas, gestão de candidaturas, agendamento de eventos de networking e acompanhamento do desenvolvimento profissional dos estudantes através de métricas e relatórios personalizados.",
    },
    {
      title: "School Drive",
      description: "Sistema de gestão para escolas de condução",
      tech: ["Netbeans", "Java", "MySQL", "iReport"],
      image: projectCareer,
      details: "Sistema para melhorar a gestão das actividades nas escolas de condução",
    },
    {
      title: "Mozimovel",
      description: "Aplicação web para gestão de pedidos de lanches com rastreamento em tempo real de entregas.",
      tech: ["Android Studio", "Java", "Kotlin", "Firebase"],
      image: projectDelivery,
      details: "App que visa facilitar o aluguel e compra de imoveis conectando os intervenientes necessários para tal, mostrando locais de primeira necessidade ao redor do imovel por alugar ou comprar.",
    },
    {
      title: "Niphuni",
      description: "Sistema de apoio as vítimas de Violência Basiada no Genero",
      tech: ["Android Studio", "Java", "Kotlin", "Firebase"],
      image: projectIot,
      details: "App desenvolvida para apoiar as vítimas de VBG, com um sistema de alerta acessível e simples de usar para garantir uma resposta rapida e segura em moemntos de crise e como informações que ajudam no seu posicionamento sob diversas situações segundo a lei.",
    },
  ];

  const skills = [
    { name: "Desenvolvimento Android", icon: Code2 },
    { name: "Base de Dados", icon: Database },
    { name: "Administração de Sistemas", icon: Server },
    { name: "Análise de Dados", icon: BarChart3 },
    { name: "Segurança", icon: Shield },
    { name: "Suporte Técnico", icon: Wrench },
    { name: "Desenvolvimento Web", icon: Cloud },
    { name: "Wordpress", icon: Smartphone },
    { name: "UI/UX Design", icon: Palette },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">MJ</h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8">
              {["home", "about", "projects", "contact"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === section ? "text-primary" : "text-foreground"
                      }`}
                  >
                    {section === "home" ? "Início" :
                      section === "about" ? "Sobre mim" :
                        section === "projects" ? "Projetos" : "Contacto"}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <ul className="md:hidden mt-4 space-y-4 animate-fade-in">
              {["home", "about", "projects", "contact"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left text-foreground hover:text-primary transition-colors"
                  >
                    {section === "home" ? "Início" :
                      section === "about" ? "Sobre mim" :
                        section === "projects" ? "Projetos" : "Contacto"}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  IT Manager / Developer
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Malagy Cassimo
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Entusiasta de Inovação Tecnológica
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Com experiência em suporte de sistemas, desenvolvimento de software e administração
                de infraestruturas tecnológicas, ajudo a criar soluções digitais que geram impacto.
              </p>
              <div className="flex gap-4">
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
                >
                  Ver Projetos
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Contactar
                </Button>
              </div>
            </div>
            <div className="flex justify-center animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
                <img
                  src={profileImage}
                  alt="Malagy Casimo Junior"
                  className="relative rounded-3xl w-full h-[450px] object-cover shadow-2xl border-4 border-card"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4 animate-fade-in">
              <h2 className="text-4xl font-bold text-foreground">Sobre mim</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou um profissional de tecnologia com sólida experiência em desenvolvimento de software,
                suporte técnico e administração de sistemas. Ao longo da minha trajectória, tive a oportunidade
                de trabalhar em projectos desafiadores que exigiram criatividade, pensamento analítico e
                habilidades técnicas diversificadas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Participei activamente no desenvolvimento de sistemas inovadores, que resolvem problemas reais na sociedade.
                O meu foco está em criar tecnologias que não apenas funcionem bem, mas que também proporcionem valor real
                aos utilizadores.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border-border"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                      <skill.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-foreground">{skill.name}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-md border border-border">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Tecnologias</h3>
              <div className="flex flex-wrap gap-3">
                {["HTML", "CSS", "JavaScript", "TypeScript", "Java", "Python", "SQL", "Oracle", "PostgreSQL", "MongoDB", "React", "Node.js", "Kotlin", "Git"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground">Projetos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma selecção dos projetos que desenvolvi, demonstrando as minhas habilidades
              em diferentes tecnologias e domínios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-scale-in border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/10 text-secondary rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary/10"
                    onClick={() => setSelectedProject(index)}
                  >
                    Ver Detalhes
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Project Details Dialog */}
          <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              {selectedProject !== null && (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{projects[selectedProject].title}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <img
                      src={projects[selectedProject].image}
                      alt={projects[selectedProject].title}
                      className="w-full rounded-lg shadow-lg"
                    />
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Descrição</h4>
                        <p className="text-muted-foreground">{projects[selectedProject].description}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Detalhes do Projecto</h4>
                        <p className="text-muted-foreground">{projects[selectedProject].details}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Tecnologias Utilizadas</h4>
                        <div className="flex flex-wrap gap-2">
                          {projects[selectedProject].tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground">Contacto</h2>
            <p className="text-lg text-muted-foreground">
              Tem uma ideia ou projeto em mente? Vamos conversar!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Envie uma mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-input"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-input"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Mensagem"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="border-input"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Conecte-se comigo</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href="mailto:malagy.junior@example.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <span>malagyy@gmail.com</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/malagycassimo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/malagycassimo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Github className="w-5 h-5 text-primary" />
                    </div>
                    <span>GitHub</span>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © 2025 Malagy Casimo. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <a
        href="mailto:malagy.junior@example.com"
        className="fixed bottom-8 right-8 w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-40"
        aria-label="Contactar por email"
      >
        <Mail className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Index;
