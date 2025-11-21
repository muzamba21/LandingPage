
import { Experience, Project, SkillCategory } from './types';

export const PROFILE = {
  name: "Igor Rabelo",
  role: "Cientista da Computação, Téc. Em Automação Industrial",
  shortBio: "Especialista em desenvolvimento de arquiteturas de controle robustas, otimização de processos industriais e integração de tecnologias OT/IT. Foco em eficiência, segurança e inovação no chão de fábrica.",
  cta: "Entre em Contato"
};

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Automation Technician",
    company: "Can Pack Group Brazil",
    period: "2020 - Presente",
    description: "Liderança técnica na arquitetura de automação para linhas de montagem automotiva. Redução de 15% no tempo de ciclo através de otimização avançada de lógica PLC e padronização de bibliotecas Siemens.",
    technologies: ["Siemens S7-1500", "Ignition SCADA", "Profinet", "Python", "Cibersegurança Industrial"]
  },
  {
    id: "2",
    role: "Automation Specialist",
    company: "Robinson Crusoe Foods",
    period: "2017 - 2020",
    description: "Manutenção e modernização de base instalada Rockwell. Integração de células robóticas Fanuc, resultando em aumento de capacidade produtiva. Gestão de normas de segurança NR-12.",
    technologies: ["Allen-Bradley ControlLogix", "Robótica Fanuc", "EtherNet/IP", "FactoryTalk"]
  },
  {
    id: "3",
    role: "Automation Technician",
    company: "Poli Nutri Nutrição",
    period: "2015 - 2017",
    description: "Comissionamento de inversores de frequência e instrumentação em campo. Diagnóstico de falhas em painéis elétricos e configuração de redes industriais.",
    technologies: ["Modbus TCP", "Leitura de Esquemas", "VFDs", "Instrumentação"]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Automação & Controle",
    skills: [
      "Siemens TIA Portal", 
      "Rockwell Studio 5000", 
      "Beckhoff TwinCAT", 
      "Segurança de Máquinas (Safety)", 
      "Controle PID Avançado",
      "Programação de Robôs (Yaskawa, ABB, Fanuc)",
      "Integração de Células Robotizadas"
    ]
  },
  {
    title: "Supervisão & IHM",
    skills: ["Ignition SCADA", "AVEVA System Platform", "FactoryTalk View", "WinCC Unified", "High Performance HMI"]
  },
  {
    title: "Conectividade & IIoT",
    skills: ["OPC UA / DA", "MQTT Sparkplug B", "Redes Industriais", "Banco de Dados SQL", "Integração OT/IT"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Modernização Indústria 4.0",
    description: "Retrofit de linha de produção com implementação de gateways IoT para coleta de dados de OEE em tempo real.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    tags: ["IIoT", "MQTT", "OEE"]
  },
  {
    id: "p2",
    title: "Célula Robotizada de Paletização",
    description: "Engenharia completa de célula com robôs colaborativos e integração de scanners de segurança de área.",
    image: "https://images.unsplash.com/photo-1565514020176-80b29a762596?auto=format&fit=crop&q=80&w=800",
    tags: ["Robótica", "Safety", "Visão Computacional"]
  },
  {
    id: "p3",
    title: "Central de Tratamento de Água",
    description: "Sistema SCADA distribuído para monitoramento remoto de estações de tratamento municipais com alta disponibilidade.",
    image: "https://images.unsplash.com/photo-1581093458791-9f302e6d30b0?auto=format&fit=crop&q=80&w=800",
    tags: ["Ignition", "Telemetria", "Redundância"]
  }
];

export const SYSTEM_INSTRUCTION = `Você é um assistente virtual inteligente para o portfólio online de ${PROFILE.name}, ${PROFILE.role}.
Sua missão é fornecer informações precisas sobre a carreira, habilidades e projetos de Marcus para recrutadores e colegas da área.

Contexto do Profissional:
Nome: ${PROFILE.name}
Bio: ${PROFILE.shortBio}

Experiência Profissional:
${EXPERIENCE.map(job => `- ${job.role} na ${job.company} (${job.period}): ${job.description} [Techs: ${job.technologies.join(', ')}]`).join('\n')}

Competências Técnicas:
${SKILLS.map(cat => `- ${cat.title}: ${cat.skills.join(', ')}`).join('\n')}

Projetos em Destaque:
${PROJECTS.map(proj => `- ${proj.title}: ${proj.description} (Tags: ${proj.tags.join(', ')})`).join('\n')}

Diretrizes de Resposta:
1. Responda em Português, mantendo um tom profissional e técnico.
2. Use as informações acima como base da verdade.
3. Se perguntado sobre algo fora deste escopo, diga educadamente que seu foco é a carreira de Marcus.
4. Para contato direto, sugira a seção de contato do site.
`;