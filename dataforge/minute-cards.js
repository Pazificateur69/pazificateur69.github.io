// Généré depuis les notes orateur du PowerPoint DataForge final.
const minuteCards = [
  {
    "id": 0,
    "range": "00:00–01:00",
    "title": "Transition slides 1 → 2",
    "slides": [
      {
        "number": 1,
        "title": "Déploiement d’une infrastructure IT sécurisée à identité hybride",
        "image": "assets/slides/slide-01.webp",
        "seconds": 40,
        "from": "00:00",
        "to": "00:40"
      },
      {
        "number": 2,
        "title": "Objectifs & plan de la présentation",
        "image": "assets/slides/slide-02.webp",
        "seconds": 20,
        "from": "00:40",
        "to": "01:00"
      }
    ],
    "segments": [
      {
        "slide": 1,
        "seconds": 40,
        "text": "Bonjour et merci de me recevoir. Je m’appelle Alessandro Gagliardi et je vais présenter mon projet de fin d’études pour le titre professionnel Administrateur d’Infrastructures Sécurisées, niveau 6. Le projet s’appelle DataForge Industries. L’objectif n’était pas simplement de faire fonctionner quelques machines virtuelles. Je voulais montrer une démarche complète : partir d’un besoin métier, analyser les risques, concevoir une architecture, la sécuriser, centraliser la détection, la superviser, prévoir sa reprise et être capable de relier chaque choix aux compétences du titre. Je vais donc présenter la cible, ce que j’ai déployé et validé, puis les limites que je transformerais en exigences d’industrialisation."
      },
      {
        "slide": 2,
        "seconds": 20,
        "text": "La question directrice est la suivante : comment protéger des données industrielles sensibles dans un système d’information hybride, tout en gardant une capacité d’administration, de détection et de reprise ? Je vais avancer dans cet ordre."
      }
    ],
    "points": [
      "Présenter le projet comme une démarche complète",
      "Distinguer cible, preuves et limites",
      "Annoncer la couverture CP1 à CP10",
      "Poser la question directrice",
      "Suivre besoin → architecture → contrôles → preuves"
    ],
    "definitions": [
      {
        "term": "Identité hybride",
        "detail": "Coexistence de plusieurs systèmes d’identité adaptés à des usages différents."
      },
      {
        "term": "Démarche de bout en bout",
        "detail": "Du besoin métier jusqu’au déploiement, à la mesure, à la reprise et à l’amélioration."
      },
      {
        "term": "Preuve",
        "detail": "Élément vérifiable : capture, configuration, test, métrique ou renvoi au dossier."
      },
      {
        "term": "Fil conducteur",
        "detail": "Ordre logique qui relie les choix techniques au besoin métier."
      }
    ],
    "competencies": [
      {
        "code": "CP1",
        "label": "Appliquer les bonnes pratiques dans l’administration des infrastructures"
      },
      {
        "code": "CP2",
        "label": "Administrer et sécuriser les infrastructures réseaux"
      },
      {
        "code": "CP3",
        "label": "Administrer et sécuriser les infrastructures systèmes"
      },
      {
        "code": "CP4",
        "label": "Administrer et sécuriser les infrastructures virtualisées"
      },
      {
        "code": "CP5",
        "label": "Concevoir une solution technique répondant à des besoins d’évolution de l’infrastructure"
      },
      {
        "code": "CP6",
        "label": "Mettre en production des évolutions de l’infrastructure"
      },
      {
        "code": "CP7",
        "label": "Mettre en œuvre et optimiser la supervision des infrastructures"
      },
      {
        "code": "CP8",
        "label": "Participer à la mesure et à l’analyse du niveau de sécurité de l’infrastructure"
      },
      {
        "code": "CP9",
        "label": "Participer à l’élaboration et à la mise en œuvre de la politique de sécurité"
      },
      {
        "code": "CP10",
        "label": "Participer à la détection et au traitement des incidents de sécurité"
      }
    ],
    "traps": [
      "Ne présente pas DataForge comme une simple accumulation de sept VMs et d’outils.",
      "Le plan doit annoncer un raisonnement, pas un catalogue de technologies."
    ],
    "transition": "À 00:40, passe de la slide 1 à la slide 2 : « La question directrice est la suivante : comment protéger des données industrielles sensibles dans un système d’information hybride, tout en gardant une capacité d’administration, de détection et de reprise ? »"
  },
  {
    "id": 1,
    "range": "01:00–02:00",
    "title": "Transition slides 2 → 3",
    "slides": [
      {
        "number": 2,
        "title": "Objectifs & plan de la présentation",
        "image": "assets/slides/slide-02.webp",
        "seconds": 55,
        "from": "01:00",
        "to": "01:55"
      },
      {
        "number": 3,
        "title": "Contexte & besoin — DataForge Industries",
        "image": "assets/slides/slide-03.webp",
        "seconds": 5,
        "from": "01:55",
        "to": "02:00"
      }
    ],
    "segments": [
      {
        "slide": 2,
        "seconds": 55,
        "text": "D’abord le besoin et l’analyse de risques. Ensuite l’architecture et le réseau, parce que les contrôles de sécurité dépendent d’un chemin de communication maîtrisé. Puis l’identité hybride et le Zero Trust. Je continuerai avec le durcissement, le SOC et la supervision. Enfin, je présenterai les sauvegardes, les validations, la couverture CP1 à CP10 et les limites. Ce fil conducteur est important : je ne vais pas réciter une liste d’outils. Pour chaque outil, je vais expliquer le besoin auquel il répond, la preuve disponible et la limite à prendre en compte."
      },
      {
        "slide": 3,
        "seconds": 5,
        "text": "DataForge Industries est une entreprise industrielle fictive de 120 collaborateurs répartis sur trois sites."
      }
    ],
    "points": [
      "Poser la question directrice",
      "Suivre besoin → architecture → contrôles → preuves",
      "Justifier chaque outil par un besoin",
      "120 collaborateurs et trois sites",
      "Protéger plans, production et données clients"
    ],
    "definitions": [
      {
        "term": "Preuve",
        "detail": "Élément vérifiable : capture, configuration, test, métrique ou renvoi au dossier."
      },
      {
        "term": "Fil conducteur",
        "detail": "Ordre logique qui relie les choix techniques au besoin métier."
      },
      {
        "term": "Valeur métier",
        "detail": "Information ou activité indispensable à la mission de l’organisation."
      },
      {
        "term": "DICAP",
        "detail": "Disponibilité, intégrité, confidentialité, auditabilité et pérennité."
      }
    ],
    "competencies": [
      {
        "code": "CP5",
        "label": "Concevoir une solution technique répondant à des besoins d’évolution de l’infrastructure"
      },
      {
        "code": "CP8",
        "label": "Participer à la mesure et à l’analyse du niveau de sécurité de l’infrastructure"
      },
      {
        "code": "CP9",
        "label": "Participer à l’élaboration et à la mise en œuvre de la politique de sécurité"
      }
    ],
    "traps": [
      "Le plan doit annoncer un raisonnement, pas un catalogue de technologies.",
      "Commence par l’impact métier avant de parler de Wazuh, WireGuard ou Docker."
    ],
    "transition": "À 01:55, passe de la slide 2 à la slide 3 : « DataForge Industries est une entreprise industrielle fictive de 120 collaborateurs répartis sur trois sites. »"
  },
  {
    "id": 2,
    "range": "02:00–03:00",
    "title": "Slide 3 · Contexte & besoin — DataForge Industries",
    "slides": [
      {
        "number": 3,
        "title": "Contexte & besoin — DataForge Industries",
        "image": "assets/slides/slide-03.webp",
        "seconds": 60,
        "from": "02:00",
        "to": "03:00"
      }
    ],
    "segments": [
      {
        "slide": 3,
        "seconds": 60,
        "text": "Elle manipule des plans techniques, des données de production et des informations clients. Ces informations donnent une conséquence concrète à la sécurité. Une fuite peut révéler un savoir-faire industriel. Une modification peut fausser une décision ou une donnée de production. Une indisponibilité prolongée peut empêcher les équipes de travailler. J’ai donc retenu trois valeurs métier : confidentialité, intégrité et disponibilité. L’auditabilité et la pérennité complètent cette grille, car une infrastructure sécurisée doit aussi permettre de comprendre ce qui s’est passé et de repartir après un incident. Cette entrée par le métier correspond à la logique EBIOS : on ne commence pas par dire « je vais installer Wazuh ». On commence par dire ce qu’il faut protéger et ce que coûterait sa compromission."
      }
    ],
    "points": [
      "120 collaborateurs et trois sites",
      "Protéger plans, production et données clients",
      "Relier sécurité et conséquences métier"
    ],
    "definitions": [
      {
        "term": "Valeur métier",
        "detail": "Information ou activité indispensable à la mission de l’organisation."
      },
      {
        "term": "DICAP",
        "detail": "Disponibilité, intégrité, confidentialité, auditabilité et pérennité."
      }
    ],
    "competencies": [
      {
        "code": "CP5",
        "label": "Concevoir une solution technique répondant à des besoins d’évolution de l’infrastructure"
      },
      {
        "code": "CP8",
        "label": "Participer à la mesure et à l’analyse du niveau de sécurité de l’infrastructure"
      },
      {
        "code": "CP9",
        "label": "Participer à l’élaboration et à la mise en œuvre de la politique de sécurité"
      }
    ],
    "traps": [
      "Commence par l’impact métier avant de parler de Wazuh, WireGuard ou Docker."
    ],
    "transition": "À 03:00, reste sur la slide 3 et poursuis sans accélérer."
  },
  {
    "id": 3,
    "range": "03:00–04:00",
    "title": "Transition slides 3 → 4",
    "slides": [
      {
        "number": 3,
        "title": "Contexte & besoin — DataForge Industries",
        "image": "assets/slides/slide-03.webp",
        "seconds": 5,
        "from": "03:00",
        "to": "03:05"
      },
      {
        "number": 4,
        "title": "Analyse de risques — EBIOS Risk Manager",
        "image": "assets/slides/slide-04.webp",
        "seconds": 55,
        "from": "03:05",
        "to": "04:00"
      }
    ],
    "segments": [
      {
        "slide": 3,
        "seconds": 5,
        "text": "C’est ce raisonnement qui justifie ensuite les choix techniques."
      },
      {
        "slide": 4,
        "seconds": 55,
        "text": "Pour l’analyse de risques, j’ai utilisé EBIOS Risk Manager. La méthode commence par les valeurs métier, puis identifie les biens supports qui les portent. Dans DataForge, il s’agit notamment des annuaires, des machines virtuelles, du réseau WireGuard, des services applicatifs et des journaux. On définit ensuite les événements redoutés : ce que l’entreprise veut éviter, par exemple une fuite ou une indisponibilité. Enfin, on croise ces événements avec des sources de risque et des chemins d’attaque pour construire huit scénarios de menace. Le point important est le risque résiduel. Après les contrôles, je ne dis pas que le risque disparaît. Je réévalue ce qui reste."
      }
    ],
    "points": [
      "120 collaborateurs et trois sites",
      "Protéger plans, production et données clients",
      "Relier sécurité et conséquences métier",
      "Partir des valeurs métier et biens supports",
      "Construire huit scénarios de menace"
    ],
    "definitions": [
      {
        "term": "Valeur métier",
        "detail": "Information ou activité indispensable à la mission de l’organisation."
      },
      {
        "term": "DICAP",
        "detail": "Disponibilité, intégrité, confidentialité, auditabilité et pérennité."
      },
      {
        "term": "Événement redouté",
        "detail": "Atteinte portée à une valeur métier, avec une conséquence pour l’organisation."
      },
      {
        "term": "Risque résiduel",
        "detail": "Risque qui demeure après l’application des mesures de sécurité."
      }
    ],
    "competencies": [
      {
        "code": "CP5",
        "label": "Concevoir une solution technique répondant à des besoins d’évolution de l’infrastructure"
      },
      {
        "code": "CP8",
        "label": "Participer à la mesure et à l’analyse du niveau de sécurité de l’infrastructure"
      },
      {
        "code": "CP9",
        "label": "Participer à l’élaboration et à la mise en œuvre de la politique de sécurité"
      },
      {
        "code": "CP10",
        "label": "Participer à la détection et au traitement des incidents de sécurité"
      }
    ],
    "traps": [
      "Commence par l’impact métier avant de parler de Wazuh, WireGuard ou Docker.",
      "EBIOS RM n’affirme jamais que le risque devient nul."
    ],
    "transition": "À 03:05, passe de la slide 3 à la slide 4 : « Pour l’analyse de risques, j’ai utilisé EBIOS Risk Manager. »"
  },
  {
    "id": 4,
    "range": "04:00–05:00",
    "title": "Transition slides 4 → 5",
    "slides": [
      {
        "number": 4,
        "title": "Analyse de risques — EBIOS Risk Manager",
        "image": "assets/slides/slide-04.webp",
        "seconds": 20,
        "from": "04:00",
        "to": "04:20"
      },
      {
        "number": 5,
        "title": "Six événements redoutés, dont trois critiques",
        "image": "assets/slides/slide-05.webp",
        "seconds": 40,
        "from": "04:20",
        "to": "05:00"
      }
    ],
    "segments": [
      {
        "slide": 4,
        "seconds": 20,
        "text": "Un résiduel faible, majeur ou modéré conduit à une décision : réduire encore, accepter avec justification ou prévoir un transfert. Dans une maquette, certains résiduels modérés sont acceptés parce que la redondance et les moyens d’exploitation d’une production ne sont pas encore présents."
      },
      {
        "slide": 5,
        "seconds": 40,
        "text": "Le dossier retient six événements redoutés, dont trois critiques. Je corrige ici un point qui apparaissait dans mon ancienne trame : il ne faut pas annoncer quatre événements critiques. Le PFE en retient trois. Le premier est la fuite de données industrielles. Le deuxième est la compromission de l’Active Directory, car le contrôleur de domaine centralise l’identité Windows, le DNS, Kerberos et les politiques de groupe."
      }
    ],
    "points": [
      "Partir des valeurs métier et biens supports",
      "Construire huit scénarios de menace",
      "Décider sur le risque résiduel",
      "Six événements redoutés",
      "Trois critiques : fuite, AD, OpenLDAP"
    ],
    "definitions": [
      {
        "term": "Événement redouté",
        "detail": "Atteinte portée à une valeur métier, avec une conséquence pour l’organisation."
      },
      {
        "term": "Risque résiduel",
        "detail": "Risque qui demeure après l’application des mesures de sécurité."
      },
      {
        "term": "Bien support",
        "detail": "Composant technique ou humain qui porte une valeur métier."
      },
      {
        "term": "Criticité",
        "detail": "Combinaison de l’impact et de la vraisemblance d’un risque."
      }
    ],
    "competencies": [
      {
        "code": "CP8",
        "label": "Participer à la mesure et à l’analyse du niveau de sécurité de l’infrastructure"
      },
      {
        "code": "CP9",
        "label": "Participer à l’élaboration et à la mise en œuvre de la politique de sécurité"
      },
      {
        "code": "CP10",
        "label": "Participer à la détection et au traitement des incidents de sécurité"
      }
    ],
    "traps": [
      "EBIOS RM n’affirme jamais que le risque devient nul.",
      "Le dossier retient trois événements critiques, pas quatre."
    ],
    "transition": "À 04:20, passe de la slide 4 à la slide 5 : « Le dossier retient six événements redoutés, dont trois critiques. »"
  },
  {
    "id": 5,
    "range": "05:00–06:00",
    "title": "Transition slides 5 → 6",
    "slides": [
      {
        "number": 5,
        "title": "Six événements redoutés, dont trois critiques",
        "image": "assets/slides/slide-05.webp",
        "seconds": 40,
        "from": "05:00",
        "to": "05:40"
      },
      {
        "number": 6,
        "title": "Huit scénarios : 3 faibles, 5 modérés",
        "image": "assets/slides/slide-06.webp",
        "seconds": 20,
        "from": "05:40",
        "to": "06:00"
      }
    ],
    "segments": [
      {
        "slide": 5,
        "seconds": 40,
        "text": "Le troisième est la compromission d’OpenLDAP, qui toucherait les hôtes Linux et les comptes qui y sont intégrés. Les trois autres événements sont l’indisponibilité prolongée, l’altération de l’intégrité de PostgreSQL et la perte de traçabilité par suppression ou perte des journaux. Cette hiérarchie influence l’architecture : les annuaires sont cloisonnés, le réseau est filtré, la base n’est pas exposée, les journaux sont centralisés et le PRA couvre les données comme les identités."
      },
      {
        "slide": 6,
        "seconds": 20,
        "text": "J’ai construit huit scénarios de menace. Trois ont un risque résiduel faible après les mesures : le brute force contre la gateway, l’exploitation du service web et la suppression de traces."
      }
    ],
    "points": [
      "Six événements redoutés",
      "Trois critiques : fuite, AD, OpenLDAP",
      "Les contrôles suivent cette hiérarchie",
      "Trois risques faibles et cinq modérés",
      "Expliquer pourquoi un chemin crédible subsiste"
    ],
    "definitions": [
      {
        "term": "Bien support",
        "detail": "Composant technique ou humain qui porte une valeur métier."
      },
      {
        "term": "Criticité",
        "detail": "Combinaison de l’impact et de la vraisemblance d’un risque."
      },
      {
        "term": "Vraisemblance",
        "detail": "Probabilité ou faisabilité d’un scénario compte tenu de l’attaquant et des protections."
      },
      {
        "term": "Acceptation du risque",
        "detail": "Décision explicite et justifiée de tolérer un risque résiduel."
      }
    ],
    "competencies": [
      {
        "code": "CP8",
        "label": "Participer à la mesure et à l’analyse du niveau de sécurité de l’infrastructure"
      },
      {
        "code": "CP9",
        "label": "Participer à l’élaboration et à la mise en œuvre de la politique de sécurité"
      },
      {
        "code": "CP10",
        "label": "Participer à la détection et au traitement des incidents de sécurité"
      }
    ],
    "traps": [
      "Le dossier retient trois événements critiques, pas quatre.",
      "Modéré ne veut ni dire négligeable, ni prouver un échec de sécurité."
    ],
    "transition": "À 05:40, passe de la slide 5 à la slide 6 : « J’ai construit huit scénarios de menace. »"
  },
  {
    "id": 6,
    "range": "06:00–07:00",
    "title": "Slide 6 · Huit scénarios : 3 faibles, 5 modérés",
    "slides": [
      {
        "number": 6,
        "title": "Huit scénarios : 3 faibles, 5 modérés",
        "image": "assets/slides/slide-06.webp",
        "seconds": 60,
        "from": "06:00",
        "to": "07:00"
      }
    ],
    "segments": [
      {
        "slide": 6,
        "seconds": 60,
        "text": "Cinq restent modérés : le phishing et le mouvement latéral, la compromission privilégiée de l’AD, la compromission d’OpenLDAP, le ransomware et l’exfiltration. Un risque modéré ne veut pas dire que la sécurité est insuffisante. Cela signifie que les contrôles réduisent la vraisemblance ou l’impact, mais qu’il existe encore un chemin crédible. Par exemple, si un compte privilégié est compromis, le RBAC et la journalisation améliorent la détection, mais ils n’annulent pas la possibilité d’un usage abusif. En production,"
      }
    ],
    "points": [
      "Trois risques faibles et cinq modérés",
      "Expliquer pourquoi un chemin crédible subsiste",
      "Proposer les réductions de production"
    ],
    "definitions": [
      {
        "term": "Vraisemblance",
        "detail": "Probabilité ou faisabilité d’un scénario compte tenu de l’attaquant et des protections."
      },
      {
        "term": "Acceptation du risque",
        "detail": "Décision explicite et justifiée de tolérer un risque résiduel."
      }
    ],
    "competencies": [
      {
        "code": "CP8",
        "label": "Participer à la mesure et à l’analyse du niveau de sécurité de l’infrastructure"
      },
      {
        "code": "CP9",
        "label": "Participer à l’élaboration et à la mise en œuvre de la politique de sécurité"
      },
      {
        "code": "CP10",
        "label": "Participer à la détection et au traitement des incidents de sécurité"
      }
    ],
    "traps": [
      "Modéré ne veut ni dire négligeable, ni prouver un échec de sécurité."
    ],
    "transition": "À 07:00, reste sur la slide 6 et poursuis sans accélérer."
  },
  {
    "id": 7,
    "range": "07:00–08:00",
    "title": "Transition slides 6 → 7",
    "slides": [
      {
        "number": 6,
        "title": "Huit scénarios : 3 faibles, 5 modérés",
        "image": "assets/slides/slide-06.webp",
        "seconds": 20,
        "from": "07:00",
        "to": "07:20"
      },
      {
        "number": 7,
        "title": "Planning du projet — 10 semaines",
        "image": "assets/slides/slide-07.webp",
        "seconds": 40,
        "from": "07:20",
        "to": "08:00"
      }
    ],
    "segments": [
      {
        "slide": 6,
        "seconds": 20,
        "text": "je réduirais ces résiduels par de la redondance, du MFA généralisé, du DLP, une segmentation plus forte, une gestion centralisée des secrets et des sauvegardes hors ligne."
      },
      {
        "slide": 7,
        "seconds": 40,
        "text": "Le projet s’est déroulé sur dix semaines, avec une approche itérative. Le cadrage et l’analyse EBIOS ont fixé les priorités. J’ai ensuite déployé les briques par dépendance : services applicatifs et SOC, gateway, supervision, réseau WireGuard, durcissement, puis identités et validation. Le jalon central est WireGuard, car la collecte Prometheus, les agents Wazuh et les authentifications distantes dépendent tous du réseau chiffré."
      }
    ],
    "points": [
      "Trois risques faibles et cinq modérés",
      "Expliquer pourquoi un chemin crédible subsiste",
      "Proposer les réductions de production",
      "Projet itératif sur dix semaines",
      "Déployer selon les dépendances"
    ],
    "definitions": [
      {
        "term": "Vraisemblance",
        "detail": "Probabilité ou faisabilité d’un scénario compte tenu de l’attaquant et des protections."
      },
      {
        "term": "Acceptation du risque",
        "detail": "Décision explicite et justifiée de tolérer un risque résiduel."
      },
      {
        "term": "Jalon",
        "detail": "Point de contrôle qui valide une étape avant de poursuivre."
      },
      {
        "term": "Approche itérative",
        "detail": "Déploiement par cycles courts avec validation et correction progressives."
      }
    ],
    "competencies": [
      {
        "code": "CP8",
        "label": "Participer à la mesure et à l’analyse du niveau de sécurité de l’infrastructure"
      },
      {
        "code": "CP9",
        "label": "Participer à l’élaboration et à la mise en œuvre de la politique de sécurité"
      },
      {
        "code": "CP10",
        "label": "Participer à la détection et au traitement des incidents de sécurité"
      },
      {
        "code": "CP5",
        "label": "Concevoir une solution technique répondant à des besoins d’évolution de l’infrastructure"
      },
      {
        "code": "CP6",
        "label": "Mettre en production des évolutions de l’infrastructure"
      }
    ],
    "traps": [
      "Modéré ne veut ni dire négligeable, ni prouver un échec de sécurité.",
      "WireGuard est le jalon central car plusieurs services dépendent de sa connectivité."
    ],
    "transition": "À 07:20, passe de la slide 6 à la slide 7 : « Le projet s’est déroulé sur dix semaines, avec une approche itérative. »"
  },
  {
    "id": 8,
    "range": "08:00–09:00",
    "title": "Transition slides 7 → 8",
    "slides": [
      {
        "number": 7,
        "title": "Planning du projet — 10 semaines",
        "image": "assets/slides/slide-07.webp",
        "seconds": 10,
        "from": "08:00",
        "to": "08:10"
      },
      {
        "number": 8,
        "title": "Architecture globale",
        "image": "assets/slides/slide-08.webp",
        "seconds": 50,
        "from": "08:10",
        "to": "09:00"
      }
    ],
    "segments": [
      {
        "slide": 7,
        "seconds": 10,
        "text": "La documentation a avancé en parallèle du déploiement afin de conserver des procédures fidèles et reproductibles."
      },
      {
        "slide": 8,
        "seconds": 50,
        "text": "Voici l’architecture cible : sept machines virtuelles, chacune avec un rôle principal. VM1 est la gateway et le bastion. VM2 porte l’application conteneurisée. VM3 centralise la supervision. VM4 porte le SOC et l’IDS. VM5 héberge OpenLDAP. VM6 est le contrôleur de domaine Windows. VM7 est le poste joint au domaine. Le choix de séparer les rôles limite le rayon d’impact. Une compromission de l’application n’est pas censée donner directement accès à la base, aux annuaires ou au SIEM."
      }
    ],
    "points": [
      "Projet itératif sur dix semaines",
      "Déployer selon les dépendances",
      "Documenter en parallèle",
      "Sept VMs avec un rôle principal chacune",
      "Architecture Oracle Cloud + VirtualBox"
    ],
    "definitions": [
      {
        "term": "Jalon",
        "detail": "Point de contrôle qui valide une étape avant de poursuivre."
      },
      {
        "term": "Approche itérative",
        "detail": "Déploiement par cycles courts avec validation et correction progressives."
      },
      {
        "term": "Bastion",
        "detail": "Point d’administration durci par lequel transitent les accès privilégiés."
      },
      {
        "term": "Hub-and-spoke",
        "detail": "Topologie où les pairs communiquent par un nœud central, le hub."
      }
    ],
    "competencies": [
      {
        "code": "CP5",
        "label": "Concevoir une solution technique répondant à des besoins d’évolution de l’infrastructure"
      },
      {
        "code": "CP6",
        "label": "Mettre en production des évolutions de l’infrastructure"
      },
      {
        "code": "CP2",
        "label": "Administrer et sécuriser les infrastructures réseaux"
      },
      {
        "code": "CP4",
        "label": "Administrer et sécuriser les infrastructures virtualisées"
      }
    ],
    "traps": [
      "WireGuard est le jalon central car plusieurs services dépendent de sa connectivité.",
      "La séparation des rôles ne protège que si les flux et les droits sont réellement filtrés."
    ],
    "transition": "À 08:10, passe de la slide 7 à la slide 8 : « Voici l’architecture cible : sept machines virtuelles, chacune avec un rôle principal. »"
  },
  {
    "id": 9,
    "range": "09:00–10:00",
    "title": "Transition slides 8 → 9",
    "slides": [
      {
        "number": 8,
        "title": "Architecture globale",
        "image": "assets/slides/slide-08.webp",
        "seconds": 40,
        "from": "09:00",
        "to": "09:40"
      },
      {
        "number": 9,
        "title": "Les 7 machines virtuelles",
        "image": "assets/slides/slide-09.webp",
        "seconds": 20,
        "from": "09:40",
        "to": "10:00"
      }
    ],
    "segments": [
      {
        "slide": 8,
        "seconds": 40,
        "text": "Cette séparation n’est pas une garantie absolue : elle dépend du firewall, des routes, des droits et de la configuration de chaque service. L’architecture est hybride. VM1 et VM3 sont placées dans Oracle Cloud ; les autres VMs sont virtualisées avec VirtualBox dans la cible décrite. Le réseau de service et d’administration passe par WireGuard en topologie hub-and-spoke."
      },
      {
        "slide": 9,
        "seconds": 20,
        "text": "Je détaille les sept machines pour montrer que l’architecture n’est pas seulement un schéma. VM1 est la gateway et le bastion sur Oracle, avec l’adresse WireGuard 10. 8. 0. 1. VM2 est le serveur applicatif Docker en 10. 8. 0. 2."
      }
    ],
    "points": [
      "Sept VMs avec un rôle principal chacune",
      "Architecture Oracle Cloud + VirtualBox",
      "Topologie WireGuard hub-and-spoke",
      "Savoir réciter le rôle des sept VMs",
      "Relier chaque VM à un besoin"
    ],
    "definitions": [
      {
        "term": "Bastion",
        "detail": "Point d’administration durci par lequel transitent les accès privilégiés."
      },
      {
        "term": "Hub-and-spoke",
        "detail": "Topologie où les pairs communiquent par un nœud central, le hub."
      },
      {
        "term": "Séparation des rôles",
        "detail": "Affectation des fonctions critiques à des systèmes distincts pour limiter l’impact."
      },
      {
        "term": "Cible vs preuve",
        "detail": "La cible décrit l’architecture voulue ; la preuve décrit ce qui a été effectivement démontré."
      }
    ],
    "competencies": [
      {
        "code": "CP2",
        "label": "Administrer et sécuriser les infrastructures réseaux"
      },
      {
        "code": "CP4",
        "label": "Administrer et sécuriser les infrastructures virtualisées"
      },
      {
        "code": "CP5",
        "label": "Concevoir une solution technique répondant à des besoins d’évolution de l’infrastructure"
      },
      {
        "code": "CP1",
        "label": "Appliquer les bonnes pratiques dans l’administration des infrastructures"
      },
      {
        "code": "CP3",
        "label": "Administrer et sécuriser les infrastructures systèmes"
      }
    ],
    "traps": [
      "La séparation des rôles ne protège que si les flux et les droits sont réellement filtrés.",
      "Ne confonds jamais les sept VMs cibles avec l’état intermédiaire de cinq VMs prouvées."
    ],
    "transition": "À 09:40, passe de la slide 8 à la slide 9 : « Je détaille les sept machines pour montrer que l’architecture n’est pas seulement un schéma. »"
  },
  {
    "id": 10,
    "range": "10:00–11:00",
    "title": "Transition slides 9 → 10",
    "slides": [
      {
        "number": 9,
        "title": "Les 7 machines virtuelles",
        "image": "assets/slides/slide-09.webp",
        "seconds": 50,
        "from": "10:00",
        "to": "10:50"
      },
      {
        "number": 10,
        "title": "Les flux sont explicitement autorisés et filtrés",
        "image": "assets/slides/slide-10.webp",
        "seconds": 10,
        "from": "10:50",
        "to": "11:00"
      }
    ],
    "segments": [
      {
        "slide": 9,
        "seconds": 50,
        "text": "VM3 est la supervision sur le sous-réseau privé Oracle en 10. 8. 0. 3. VM4 héberge Wazuh et Suricata. VM5 est l’annuaire Linux. VM6 porte l’Active Directory, le DNS, Kerberos et les GPO. VM7 est le poste Windows joint au domaine. La séparation correspond aux bonnes pratiques d’administration : rôles explicites, flux nécessaires et responsabilité identifiable. Elle couvre aussi la virtualisation : chaque VM peut être sauvegardée, reconstruite et testée séparément. Je précise à l’oral que le PFE décrit une cible finale de sept VMs. La note de vérité du projet rappelle qu’à une étape intermédiaire, la preuve réellement disponible était encore limitée à cinq VMs ; je ne dois pas confondre cible et état de preuve."
      },
      {
        "slide": 10,
        "seconds": 10,
        "text": "Le réseau WireGuard utilise 10. 8. 0. 0/24. VM1 écoute sur UDP 51820 et joue le rôle de hub."
      }
    ],
    "points": [
      "Savoir réciter le rôle des sept VMs",
      "Relier chaque VM à un besoin",
      "Distinguer cible finale et preuve intermédiaire",
      "WireGuard 10.8.0.0/24 et hub VM1",
      "AllowedIPs précises en /32"
    ],
    "definitions": [
      {
        "term": "Séparation des rôles",
        "detail": "Affectation des fonctions critiques à des systèmes distincts pour limiter l’impact."
      },
      {
        "term": "Cible vs preuve",
        "detail": "La cible décrit l’architecture voulue ; la preuve décrit ce qui a été effectivement démontré."
      },
      {
        "term": "AllowedIPs",
        "detail": "Réseaux qu’un pair WireGuard peut annoncer et recevoir ; ils participent au routage et au contrôle de source."
      },
      {
        "term": "SPOF",
        "detail": "Single Point of Failure : composant unique dont la panne interrompt le service."
      }
    ],
    "competencies": [
      {
        "code": "CP1",
        "label": "Appliquer les bonnes pratiques dans l’administration des infrastructures"
      },
      {
        "code": "CP2",
        "label": "Administrer et sécuriser les infrastructures réseaux"
      },
      {
        "code": "CP3",
        "label": "Administrer et sécuriser les infrastructures systèmes"
      },
      {
        "code": "CP4",
        "label": "Administrer et sécuriser les infrastructures virtualisées"
      },
      {
        "code": "CP7",
        "label": "Mettre en œuvre et optimiser la supervision des infrastructures"
      },
      {
        "code": "CP10",
        "label": "Participer à la détection et au traitement des incidents de sécurité"
      }
    ],
    "traps": [
      "Ne confonds jamais les sept VMs cibles avec l’état intermédiaire de cinq VMs prouvées.",
      "Un VPN chiffre le transport, mais ne remplace pas un firewall ni l’autorisation applicative."
    ],
    "transition": "À 10:50, passe de la slide 9 à la slide 10 : « Le réseau WireGuard utilise 10. »"
  },
  {
    "id": 11,
    "range": "11:00–12:00",
    "title": "Slide 10 · Les flux sont explicitement autorisés et filtrés",
    "slides": [
      {
        "number": 10,
        "title": "Les flux sont explicitement autorisés et filtrés",
        "image": "assets/slides/slide-10.webp",
        "seconds": 60,
        "from": "11:00",
        "to": "12:00"
      }
    ],
    "segments": [
      {
        "slide": 10,
        "seconds": 60,
        "text": "Chaque pair dispose d’une clé publique et d’AllowedIPs précises, souvent limitées à une adresse en /32. Cela sert à la fois au routage et au contrôle de l’adresse source autorisée pour le pair. Dans Oracle Cloud, la VCN est en 10. 0. 0. 0/16, avec une séparation public/privé. La gateway est le point public ; la supervision est restreinte. La maquette n’a pas de VLAN physiques, car elle combine cloud et VirtualBox sans commutateurs administrables. WireGuard apporte donc un réseau chiffré et reproductible."
      }
    ],
    "points": [
      "WireGuard 10.8.0.0/24 et hub VM1",
      "AllowedIPs précises en /32",
      "Assumer VM1 comme point unique de défaillance"
    ],
    "definitions": [
      {
        "term": "AllowedIPs",
        "detail": "Réseaux qu’un pair WireGuard peut annoncer et recevoir ; ils participent au routage et au contrôle de source."
      },
      {
        "term": "SPOF",
        "detail": "Single Point of Failure : composant unique dont la panne interrompt le service."
      }
    ],
    "competencies": [
      {
        "code": "CP2",
        "label": "Administrer et sécuriser les infrastructures réseaux"
      },
      {
        "code": "CP3",
        "label": "Administrer et sécuriser les infrastructures systèmes"
      },
      {
        "code": "CP7",
        "label": "Mettre en œuvre et optimiser la supervision des infrastructures"
      },
      {
        "code": "CP10",
        "label": "Participer à la détection et au traitement des incidents de sécurité"
      }
    ],
    "traps": [
      "Un VPN chiffre le transport, mais ne remplace pas un firewall ni l’autorisation applicative."
    ],
    "transition": "À 12:00, reste sur la slide 10 et poursuis sans accélérer."
  },
  {
    "id": 12,
    "range": "12:00–13:00",
    "title": "Transition slides 10 → 11",
    "slides": [
      {
        "number": 10,
        "title": "Les flux sont explicitement autorisés et filtrés",
        "image": "assets/slides/slide-10.webp",
        "seconds": 20,
        "from": "12:00",
        "to": "12:20"
      },
      {
        "number": 11,
        "title": "Application des principes Zero Trust",
        "image": "assets/slides/slide-11.webp",
        "seconds": 40,
        "from": "12:20",
        "to": "13:00"
      }
    ],
    "segments": [
      {
        "slide": 10,
        "seconds": 20,
        "text": "La limite est claire : VM1 devient un point unique de défaillance. En production, je prévoirais deux gateways, une bascule, une IP virtuelle ou deux endpoints, et une supervision spécifique des handshakes."
      },
      {
        "slide": 11,
        "seconds": 40,
        "text": "Le Zero Trust n’est pas un produit ajouté à la fin. C’est une manière de prendre les décisions d’accès. Vérifier explicitement signifie ne pas considérer le réseau interne comme fiable : clés SSH, TOTP sur le bastion, SSSD et Kerberos vérifient l’identité et le contexte. Le moindre privilège se retrouve dans les groupes de sécurité, le sudo limité, les comptes de service sans shell et la base non exposée. La micro-segmentation est logique dans la maquette :"
      }
    ],
    "points": [
      "WireGuard 10.8.0.0/24 et hub VM1",
      "AllowedIPs précises en /32",
      "Assumer VM1 comme point unique de défaillance",
      "Vérifier explicitement",
      "Moindre privilège et micro-segmentation"
    ],
    "definitions": [
      {
        "term": "AllowedIPs",
        "detail": "Réseaux qu’un pair WireGuard peut annoncer et recevoir ; ils participent au routage et au contrôle de source."
      },
      {
        "term": "SPOF",
        "detail": "Single Point of Failure : composant unique dont la panne interrompt le service."
      },
      {
        "term": "Zero Trust",
        "detail": "Modèle dans lequel aucun accès n’est accordé uniquement parce qu’il vient du réseau interne."
      },
      {
        "term": "Micro-segmentation",
        "detail": "Découpage fin des flux et ressources afin de limiter les mouvements latéraux."
      }
    ],
    "competencies": [
      {
        "code": "CP2",
        "label": "Administrer et sécuriser les infrastructures réseaux"
      },
      {
        "code": "CP3",
        "label": "Administrer et sécuriser les infrastructures systèmes"
      },
      {
        "code": "CP7",
        "label": "Mettre en œuvre et optimiser la supervision des infrastructures"
      },
      {
        "code": "CP10",
        "label": "Participer à la détection et au traitement des incidents de sécurité"
      },
      {
        "code": "CP9",
        "label": "Participer à l’élaboration et à la mise en œuvre de la politique de sécurité"
      }
    ],
    "traps": [
      "Un VPN chiffre le transport, mais ne remplace pas un firewall ni l’autorisation applicative.",
      "WireGuard seul ne suffit pas à faire du Zero Trust."
    ],
    "transition": "À 12:20, passe de la slide 10 à la slide 11 : « Le Zero Trust n’est pas un produit ajouté à la fin. »"
  },
  {
    "id": 13,
    "range": "13:00–14:00",
    "title": "Transition slides 11 → 12",
    "slides": [
      {
        "number": 11,
        "title": "Application des principes Zero Trust",
        "image": "assets/slides/slide-11.webp",
        "seconds": 40,
        "from": "13:00",
        "to": "13:40"
      },
      {
        "number": 12,
        "title": "Choix techniques justifiés",
        "image": "assets/slides/slide-12.webp",
        "seconds": 20,
        "from": "13:40",
        "to": "14:00"
      }
    ],
    "segments": [
      {
        "slide": 11,
        "seconds": 40,
        "text": "WireGuard sépare les chemins, nftables filtre, Docker sépare frontend et backend et Oracle sépare public et privé. Supposer la compromission signifie prévoir la détection et la preuve même si une première barrière tombe. Enfin, la journalisation permet d’attribuer, corréler et répondre. La limite est de ne pas confondre « réseau chiffré » avec « confiance zéro ». Le tunnel protège le transport ; il ne remplace ni l’autorisation, ni la surveillance, ni la gouvernance des comptes."
      },
      {
        "slide": 12,
        "seconds": 20,
        "text": "Mes choix répondent à quatre critères : sécurité, exploitabilité, coût et adéquation à une maquette démontrable."
      }
    ],
    "points": [
      "Vérifier explicitement",
      "Moindre privilège et micro-segmentation",
      "Supposer la compromission et journaliser",
      "Évaluer sécurité, exploitabilité, coût et démontrabilité",
      "Associer un outil à chaque besoin"
    ],
    "definitions": [
      {
        "term": "Zero Trust",
        "detail": "Modèle dans lequel aucun accès n’est accordé uniquement parce qu’il vient du réseau interne."
      },
      {
        "term": "Micro-segmentation",
        "detail": "Découpage fin des flux et ressources afin de limiter les mouvements latéraux."
      },
      {
        "term": "IAM",
        "detail": "Gestion des identités, authentifications, rôles et droits d’accès."
      },
      {
        "term": "SIEM",
        "detail": "Plateforme centralisant et corrélant les événements de sécurité."
      }
    ],
    "competencies": [
      {
        "code": "CP2",
        "label": "Administrer et sécuriser les infrastructures réseaux"
      },
      {
        "code": "CP3",
        "label": "Administrer et sécuriser les infrastructures systèmes"
      },
      {
        "code": "CP7",
        "label": "Mettre en œuvre et optimiser la supervision des infrastructures"
      },
      {
        "code": "CP9",
        "label": "Participer à l’élaboration et à la mise en œuvre de la politique de sécurité"
      },
      {
        "code": "CP10",
        "label": "Participer à la détection et au traitement des incidents de sécurité"
      },
      {
        "code": "CP4",
        "label": "Administrer et sécuriser les infrastructures virtualisées"
      },
      {
        "code": "CP5",
        "label": "Concevoir une solution technique répondant à des besoins d’évolution de l’infrastructure"
      },
      {
        "code": "CP8",
        "label": "Participer à la mesure et à l’analyse du niveau de sécurité de l’infrastructure"
      }
    ],
    "traps": [
      "WireGuard seul ne suffit pas à faire du Zero Trust.",
      "Un outil open source n’est pas gratuit à exploiter : administration, stockage et support ont un coût."
    ],
    "transition": "À 13:40, passe de la slide 11 à la slide 12 : « Mes choix répondent à quatre critères : sécurité, exploitabilité, coût et adéquation à une maquette démontrable. »"
  },
  {
    "id": 14,
    "range": "14:00–15:00",
    "title": "Slide 12 · Choix techniques justifiés",
    "slides": [
      {
        "number": 12,
        "title": "Choix techniques justifiés",
        "image": "assets/slides/slide-12.webp",
        "seconds": 60,
        "from": "14:00",
        "to": "15:00"
      }
    ],
    "segments": [
      {
        "slide": 12,
        "seconds": 60,
        "text": "WireGuard fournit un VPN simple et moderne ; nftables apporte un filtrage atomique ; Wazuh rassemble collecte, FIM et réponse active ; Prometheus et Grafana couvrent la disponibilité et les performances. OpenLDAP conserve l’identité Linux, Active Directory apporte Kerberos, DNS et GPO côté Windows. VirtualBox et Oracle Cloud permettent enfin de démontrer une architecture hybride à coût nul sur la maquette."
      }
    ],
    "points": [
      "Évaluer sécurité, exploitabilité, coût et démontrabilité",
      "Associer un outil à chaque besoin",
      "Rester capable de citer une alternative"
    ],
    "definitions": [
      {
        "term": "IAM",
        "detail": "Gestion des identités, authentifications, rôles et droits d’accès."
      },
      {
        "term": "SIEM",
        "detail": "Plateforme centralisant et corrélant les événements de sécurité."
      }
    ],
    "competencies": [
      {
        "code": "CP2",
        "label": "Administrer et sécuriser les infrastructures réseaux"
      },
      {
        "code": "CP3",
        "label": "Administrer et sécuriser les infrastructures systèmes"
      },
      {
        "code": "CP4",
        "label": "Administrer et sécuriser les infrastructures virtualisées"
      },
      {
        "code": "CP5",
        "label": "Concevoir une solution technique répondant à des besoins d’évolution de l’infrastructure"
      },
      {
        "code": "CP7",
        "label": "Mettre en œuvre et optimiser la supervision des infrastructures"
      },
      {
        "code": "CP8",
        "label": "Participer à la mesure et à l’analyse du niveau de sécurité de l’infrastructure"
      },
      {
        "code": "CP10",
        "label": "Participer à la détection et au traitement des incidents de sécurité"
      }
    ],
    "traps": [
      "Un outil open source n’est pas gratuit à exploiter : administration, stockage et support ont un coût."
    ],
    "transition": "À 15:00, passe à la slide 13 — Chaque outil a une force, une faiblesse et une alternative."
  },
  {
    "id": 15,
    "range": "15:00–16:00",
    "title": "Slide 13 · Chaque outil a une force, une faiblesse et une alternative",
    "slides": [
      {
        "number": 13,
        "title": "Chaque outil a une force, une faiblesse et une alternative",
        "image": "assets/slides/slide-13.webp",
        "seconds": 60,
        "from": "15:00",
        "to": "16:00"
      }
    ],
    "segments": [
      {
        "slide": 13,
        "seconds": 60,
        "text": "Le jury attend aussi que je connaisse les faiblesses de mes outils. WireGuard n’apporte pas de gouvernance d’identité native. nftables est puissant mais moins accessible qu’UFW. Wazuh demande du réglage pour limiter le bruit et sa corrélation multi-hôtes est moins avancée qu’un grand SIEM propriétaire. Prometheus traite les métriques, pas les journaux, et le stockage long terme demande une brique supplémentaire."
      }
    ],
    "points": [
      "Donner force, faiblesse et alternative",
      "Expliquer les compromis de la maquette",
      "Projeter les choix de production"
    ],
    "definitions": [
      {
        "term": "Compromis technique",
        "detail": "Arbitrage explicite entre sécurité, coût, complexité, performance et exploitation."
      },
      {
        "term": "TCO",
        "detail": "Coût total de possession : acquisition, exploitation, maintenance, support et temps humain."
      }
    ],
    "competencies": [
      {
        "code": "CP5",
        "label": "Concevoir une solution technique répondant à des besoins d’évolution de l’infrastructure"
      },
      {
        "code": "CP8",
        "label": "Participer à la mesure et à l’analyse du niveau de sécurité de l’infrastructure"
      },
      {
        "code": "CP9",
        "label": "Participer à l’élaboration et à la mise en œuvre de la politique de sécurité"
      }
    ],
    "traps": [
      "N’affirme pas qu’une technologie est la meilleure dans l’absolu ; elle est adaptée à un contexte."
    ],
    "transition": "À 16:00, reste sur la slide 13 et poursuis sans accélérer."
  },
  {
    "id": 16,
    "range": "16:00–17:00",
    "title": "Transition slides 13 → 14",
    "slides": [
      {
        "number": 13,
        "title": "Chaque outil a une force, une faiblesse et une alternative",
        "image": "assets/slides/slide-13.webp",
        "seconds": 40,
        "from": "16:00",
        "to": "16:40"
      },
      {
        "number": 14,
        "title": "VM1 — Sécurisation du réseau & des accès",
        "image": "assets/slides/slide-14.webp",
        "seconds": 20,
        "from": "16:40",
        "to": "17:00"
      }
    ],
    "segments": [
      {
        "slide": 13,
        "seconds": 40,
        "text": "OpenLDAP est léger et adapté à Unix, mais il ne fournit ni GPO ni expérience d’administration Windows. Enfin, VirtualBox et le Free Tier Oracle n’offrent ni haute disponibilité, ni support, ni engagement de service. Ces limites ne rendent pas les choix mauvais : elles définissent la frontière entre la maquette et la production."
      },
      {
        "slide": 14,
        "seconds": 20,
        "text": "VM1 concentre le durcissement périmétrique puisqu’elle est la seule machine publique. La politique nftables est DROP par défaut sur INPUT et FORWARD. J’ouvre seulement les flux utiles : WireGuard, SSH contrôlé, HTTPS et les flux de supervision nécessaires."
      }
    ],
    "points": [
      "Donner force, faiblesse et alternative",
      "Expliquer les compromis de la maquette",
      "Projeter les choix de production",
      "SSH par clé ED25519 sans root",
      "TOTP sur le bastion et Fail2ban"
    ],
    "definitions": [
      {
        "term": "Compromis technique",
        "detail": "Arbitrage explicite entre sécurité, coût, complexité, performance et exploitation."
      },
      {
        "term": "TCO",
        "detail": "Coût total de possession : acquisition, exploitation, maintenance, support et temps humain."
      },
      {
        "term": "Deny by default",
        "detail": "Tout flux est refusé sauf s’il est explicitement autorisé."
      },
      {
        "term": "TOTP",
        "detail": "Second facteur temporaire calculé à partir d’un secret partagé et du temps."
      }
    ],
    "competencies": [
      {
        "code": "CP5",
        "label": "Concevoir une solution technique répondant à des besoins d’évolution de l’infrastructure"
      },
      {
        "code": "CP8",
        "label": "Participer à la mesure et à l’analyse du niveau de sécurité de l’infrastructure"
      },
      {
        "code": "CP9",
        "label": "Participer à l’élaboration et à la mise en œuvre de la politique de sécurité"
      },
      {
        "code": "CP1",
        "label": "Appliquer les bonnes pratiques dans l’administration des infrastructures"
      },
      {
        "code": "CP2",
        "label": "Administrer et sécuriser les infrastructures réseaux"
      },
      {
        "code": "CP3",
        "label": "Administrer et sécuriser les infrastructures systèmes"
      }
    ],
    "traps": [
      "N’affirme pas qu’une technologie est la meilleure dans l’absolu ; elle est adaptée à un contexte.",
      "Fail2ban réduit le bruit et bloque des sources ; il ne remplace ni MFA ni authentification forte."
    ],
    "transition": "À 16:40, passe de la slide 13 à la slide 14 : « VM1 concentre le durcissement périmétrique puisqu’elle est la seule machine publique. »"
  },
  {
    "id": 17,
    "range": "17:00–18:00",
    "title": "Slide 14 · VM1 — Sécurisation du réseau & des accès",
    "slides": [
      {
        "number": 14,
        "title": "VM1 — Sécurisation du réseau & des accès",
        "image": "assets/slides/slide-14.webp",
        "seconds": 60,
        "from": "17:00",
        "to": "18:00"
      }
    ],
    "segments": [
      {
        "slide": 14,
        "seconds": 60,
        "text": "Le SSH utilise une clé ED25519, interdit la connexion root et désactive l’authentification par mot de passe. L’administration passe par un compte nominatif puis sudo, afin de garder l’imputabilité. Le nombre de tentatives est limité. Fail2ban ajoute quatre jails : sshd, nginx-http-auth, nginx-limit-req et nginx-botsearch. Le TOTP protège le bastion, mais je dois être précis : la maquette ne généralise pas le MFA à tous les flux et le mode de transition nullok existe pour les comptes non enrôlés. En production, je retirerais nullok après enrôlement. Le score Lynis de VM1 est 70. Ce score mesure des contrôles Linux ; ce n’est ni une certification ni un niveau de sécurité global."
      }
    ],
    "points": [
      "SSH par clé ED25519 sans root",
      "TOTP sur le bastion et Fail2ban",
      "nftables en politique DROP par défaut"
    ],
    "definitions": [
      {
        "term": "Deny by default",
        "detail": "Tout flux est refusé sauf s’il est explicitement autorisé."
      },
      {
        "term": "TOTP",
        "detail": "Second facteur temporaire calculé à partir d’un secret partagé et du temps."
      }
    ],
    "competencies": [
      {
        "code": "CP1",
        "label": "Appliquer les bonnes pratiques dans l’administration des infrastructures"
      },
      {
        "code": "CP2",
        "label": "Administrer et sécuriser les infrastructures réseaux"
      },
      {
        "code": "CP3",
        "label": "Administrer et sécuriser les infrastructures systèmes"
      },
      {
        "code": "CP9",
        "label": "Participer à l’élaboration et à la mise en œuvre de la politique de sécurité"
      }
    ],
    "traps": [
      "Fail2ban réduit le bruit et bloque des sources ; il ne remplace ni MFA ni authentification forte."
    ],
    "transition": "À 18:00, passe à la slide 15 — VM2 — Services applicatifs conteneurisés."
  },
  {
    "id": 18,
    "range": "18:00–19:00",
    "title": "Slide 15 · VM2 — Services applicatifs conteneurisés",
    "slides": [
      {
        "number": 15,
        "title": "VM2 — Services applicatifs conteneurisés",
        "image": "assets/slides/slide-15.webp",
        "seconds": 60,
        "from": "18:00",
        "to": "19:00"
      }
    ],
    "segments": [
      {
        "slide": 15,
        "seconds": 60,
        "text": "VM2 porte trois rôles applicatifs conteneurisés : le frontal Nginx, l’application et PostgreSQL avec une interface d’administration contrôlée. La mesure structurante est la séparation des réseaux Docker. Le frontend n’a pas besoin de parler directement à la base. Le backend peut accéder à PostgreSQL, mais la base n’est pas publiée vers Internet. Adminer reste limité au réseau WireGuard et à un usage d’administration. J’ai ajouté des protections complémentaires : no-new-privileges, rotation des journaux, healthchecks, volumes persistants, secrets et une configuration pg_hba restreinte. Le principe est de réduire les chemins et les privilèges avant même de parler de détection. La limite à reconnaître est que Docker n’est pas une frontière absolue. Une compromission de l’hôte ou du runtime doit être traitée par le durcissement système, les mises à jour, la supervision et le contrôle des privilèges."
      }
    ],
    "points": [
      "Réseaux Docker frontend et backend",
      "PostgreSQL non exposé sur l’hôte",
      "Volumes persistants et sauvegardes"
    ],
    "definitions": [
      {
        "term": "Conteneurisation",
        "detail": "Isolation de processus partageant le noyau de l’hôte, plus légère qu’une VM."
      },
      {
        "term": "Volume persistant",
        "detail": "Stockage conservé indépendamment du cycle de vie d’un conteneur."
      }
    ],
    "competencies": [
      {
        "code": "CP1",
        "label": "Appliquer les bonnes pratiques dans l’administration des infrastructures"
      },
      {
        "code": "CP3",
        "label": "Administrer et sécuriser les infrastructures systèmes"
      },
      {
        "code": "CP6",
        "label": "Mettre en production des évolutions de l’infrastructure"
      }
    ],
    "traps": [
      "Un conteneur n’est pas une frontière de sécurité équivalente à une VM."
    ],
    "transition": "À 19:00, reste sur la slide 15 et poursuis sans accélérer."
  },
  {
    "id": 19,
    "range": "19:00–20:00",
    "title": "Transition slides 15 → 16",
    "slides": [
      {
        "number": 15,
        "title": "VM2 — Services applicatifs conteneurisés",
        "image": "assets/slides/slide-15.webp",
        "seconds": 5,
        "from": "19:00",
        "to": "19:05"
      },
      {
        "number": 16,
        "title": "VM3 — Supervision Prometheus, Grafana & Alertmanager",
        "image": "assets/slides/slide-16.webp",
        "seconds": 55,
        "from": "19:05",
        "to": "20:00"
      }
    ],
    "segments": [
      {
        "slide": 15,
        "seconds": 5,
        "text": "Le score Lynis documenté pour VM2 est 72."
      },
      {
        "slide": 16,
        "seconds": 55,
        "text": "VM3 regroupe Prometheus, Grafana et Alertmanager. Prometheus utilise le modèle pull : le serveur interroge les exporters. C’est utile pour la disponibilité, car une cible qui ne répond plus devient immédiatement un signal. Node_exporter est installé sur les hôtes Linux. Windows_exporter est utilisé sur VM6 et VM7. Grafana fournit les tableaux de bord : vue globale, sécurité et alertes, métriques Docker et état TLS. Alertmanager regroupe et déduplique les alertes avant de notifier. Blackbox Exporter complète la mesure. Node_exporter répond à la question « la machine fonctionne-t-elle ? ». Blackbox répond à « le service répond-il comme le verrait un client ?"
      }
    ],
    "points": [
      "Réseaux Docker frontend et backend",
      "PostgreSQL non exposé sur l’hôte",
      "Volumes persistants et sauvegardes",
      "Prometheus collecte en modèle pull",
      "Exporters Linux et Windows"
    ],
    "definitions": [
      {
        "term": "Conteneurisation",
        "detail": "Isolation de processus partageant le noyau de l’hôte, plus légère qu’une VM."
      },
      {
        "term": "Volume persistant",
        "detail": "Stockage conservé indépendamment du cycle de vie d’un conteneur."
      },
      {
        "term": "Modèle pull",
        "detail": "Le serveur de supervision vient périodiquement lire les métriques des cibles."
      },
      {
        "term": "Exporter",
        "detail": "Service qui expose des métriques dans un format compris par Prometheus."
      }
    ],
    "competencies": [
      {
        "code": "CP1",
        "label": "Appliquer les bonnes pratiques dans l’administration des infrastructures"
      },
      {
        "code": "CP3",
        "label": "Administrer et sécuriser les infrastructures systèmes"
      },
      {
        "code": "CP6",
        "label": "Mettre en production des évolutions de l’infrastructure"
      },
      {
        "code": "CP7",
        "label": "Mettre en œuvre et optimiser la supervision des infrastructures"
      }
    ],
    "traps": [
      "Un conteneur n’est pas une frontière de sécurité équivalente à une VM.",
      "La supervision de performance ne remplace pas la détection d’incidents de sécurité."
    ],
    "transition": "À 19:05, passe de la slide 15 à la slide 16 : « VM3 regroupe Prometheus, Grafana et Alertmanager. »"
  },
  {
    "id": 20,
    "range": "20:00–21:00",
    "title": "Transition slides 16 → 17",
    "slides": [
      {
        "number": 16,
        "title": "VM3 — Supervision Prometheus, Grafana & Alertmanager",
        "image": "assets/slides/slide-16.webp",
        "seconds": 25,
        "from": "20:00",
        "to": "20:25"
      },
      {
        "number": 17,
        "title": "Superviser, alerter et tester le service réellement rendu",
        "image": "assets/slides/slide-17.webp",
        "seconds": 35,
        "from": "20:25",
        "to": "21:00"
      }
    ],
    "segments": [
      {
        "slide": 16,
        "seconds": 25,
        "text": "». Une VM peut être UP alors que son application est bloquée. La limite est de ne pas confondre supervision et SIEM. Prometheus observe surtout des métriques ; Wazuh analyse des événements et des traces de sécurité."
      },
      {
        "slide": 17,
        "seconds": 35,
        "text": "La supervision apporte une vision complémentaire au SOC. Prometheus mesure les ressources et l’état des exporters. Blackbox vérifie la disponibilité réellement perçue des services. Grafana rend les tendances lisibles. Alertmanager groupe et notifie. Wazuh ajoute la dimension événementielle et sécurité. Je peux donc distinguer trois cas. Une machine peut être indisponible : l’exporter ne répond plus."
      }
    ],
    "points": [
      "Prometheus collecte en modèle pull",
      "Exporters Linux et Windows",
      "Grafana présente des tableaux de bord",
      "Alertmanager route et déduplique les alertes",
      "Blackbox teste un service de l’extérieur"
    ],
    "definitions": [
      {
        "term": "Modèle pull",
        "detail": "Le serveur de supervision vient périodiquement lire les métriques des cibles."
      },
      {
        "term": "Exporter",
        "detail": "Service qui expose des métriques dans un format compris par Prometheus."
      },
      {
        "term": "Alertmanager",
        "detail": "Composant qui groupe, inhibe, déduplique et distribue les alertes Prometheus."
      },
      {
        "term": "Blackbox exporter",
        "detail": "Sonde active qui teste la disponibilité d’un service via HTTP, TCP, ICMP ou DNS."
      }
    ],
    "competencies": [
      {
        "code": "CP7",
        "label": "Mettre en œuvre et optimiser la supervision des infrastructures"
      },
      {
        "code": "CP10",
        "label": "Participer à la détection et au traitement des incidents de sécurité"
      }
    ],
    "traps": [
      "La supervision de performance ne remplace pas la détection d’incidents de sécurité.",
      "Une alerte n’est utile que si elle est actionnable, routée et associée à une procédure."
    ],
    "transition": "À 20:25, passe de la slide 16 à la slide 17 : « La supervision apporte une vision complémentaire au SOC. »"
  },
  {
    "id": 21,
    "range": "21:00–22:00",
    "title": "Transition slides 17 → 18",
    "slides": [
      {
        "number": 17,
        "title": "Superviser, alerter et tester le service réellement rendu",
        "image": "assets/slides/slide-17.webp",
        "seconds": 45,
        "from": "21:00",
        "to": "21:45"
      },
      {
        "number": 18,
        "title": "VM4 — SOC / SIEM Wazuh",
        "image": "assets/slides/slide-18.webp",
        "seconds": 15,
        "from": "21:45",
        "to": "22:00"
      }
    ],
    "segments": [
      {
        "slide": 17,
        "seconds": 45,
        "text": "Une machine peut être disponible mais son service en panne : Blackbox voit un mauvais code HTTP ou une latence anormale. Enfin, le service peut répondre normalement alors qu’une activité suspecte est détectée : Wazuh et Suricata prennent alors le relais. Cette corrélation évite de traiter chaque outil dans son silo. Elle doit néanmoins être documentée : seuils, propriétaire de l’alerte, niveau de criticité et procédure de réponse. Sinon, on crée une avalanche de notifications sans capacité opérationnelle."
      },
      {
        "slide": 18,
        "seconds": 15,
        "text": "VM4 porte la stack Wazuh complète : Manager, Indexer et Dashboard. La cible prévoit sept agents : l’agent local du manager et six agents distants."
      }
    ],
    "points": [
      "Alertmanager route et déduplique les alertes",
      "Blackbox teste un service de l’extérieur",
      "Prévoir mail et webhook",
      "Wazuh centralise les événements",
      "Sept agents au total dont six distants"
    ],
    "definitions": [
      {
        "term": "Alertmanager",
        "detail": "Composant qui groupe, inhibe, déduplique et distribue les alertes Prometheus."
      },
      {
        "term": "Blackbox exporter",
        "detail": "Sonde active qui teste la disponibilité d’un service via HTTP, TCP, ICMP ou DNS."
      },
      {
        "term": "Agent Wazuh",
        "detail": "Composant installé sur une machine qui collecte et transmet ses événements."
      },
      {
        "term": "Manager Wazuh",
        "detail": "Serveur qui décode, analyse, corrèle et déclenche les réponses."
      }
    ],
    "competencies": [
      {
        "code": "CP7",
        "label": "Mettre en œuvre et optimiser la supervision des infrastructures"
      },
      {
        "code": "CP10",
        "label": "Participer à la détection et au traitement des incidents de sécurité"
      },
      {
        "code": "CP8",
        "label": "Participer à la mesure et à l’analyse du niveau de sécurité de l’infrastructure"
      }
    ],
    "traps": [
      "Une alerte n’est utile que si elle est actionnable, routée et associée à une procédure.",
      "Sur VM4, le manager surveille aussi l’hôte local ; les six autres machines utilisent un agent distant."
    ],
    "transition": "À 21:45, passe de la slide 17 à la slide 18 : « VM4 porte la stack Wazuh complète : Manager, Indexer et Dashboard. »"
  },
  {
    "id": 22,
    "range": "22:00–23:00",
    "title": "Slide 18 · VM4 — SOC / SIEM Wazuh",
    "slides": [
      {
        "number": 18,
        "title": "VM4 — SOC / SIEM Wazuh",
        "image": "assets/slides/slide-18.webp",
        "seconds": 60,
        "from": "22:00",
        "to": "23:00"
      }
    ],
    "segments": [
      {
        "slide": 18,
        "seconds": 60,
        "text": "Les sept règles personnalisées couvrent le contexte DataForge : brute force SSH, scan de ports, escalade sudo, modification de fichiers sensibles, connexion root, conteneur lancé hors horaires et détection ClamAV. Le FIM surveille notamment /etc, les binaires système et la configuration Wazuh. Auditd apporte neuf règles verrouillées par -e 2. Suricata 6. 0. 4 fonctionne ici comme IDS avec les règles ET Open. Il produit des événements EVE JSON qui sont transmis à Wazuh. Je dois être précis : je ne le présente pas comme un IPS inline déployé. Le blocage est délégué au firewall, à Fail2ban ou à une réponse active configurée."
      }
    ],
    "points": [
      "Wazuh centralise les événements",
      "Sept agents au total dont six distants",
      "Suricata, FIM, auditd et événements Windows"
    ],
    "definitions": [
      {
        "term": "Agent Wazuh",
        "detail": "Composant installé sur une machine qui collecte et transmet ses événements."
      },
      {
        "term": "Manager Wazuh",
        "detail": "Serveur qui décode, analyse, corrèle et déclenche les réponses."
      }
    ],
    "competencies": [
      {
        "code": "CP8",
        "label": "Participer à la mesure et à l’analyse du niveau de sécurité de l’infrastructure"
      },
      {
        "code": "CP10",
        "label": "Participer à la détection et au traitement des incidents de sécurité"
      }
    ],
    "traps": [
      "Sur VM4, le manager surveille aussi l’hôte local ; les six autres machines utilisent un agent distant."
    ],
    "transition": "À 23:00, reste sur la slide 18 et poursuis sans accélérer."
  },
  {
    "id": 23,
    "range": "23:00–24:00",
    "title": "Transition slides 18 → 19",
    "slides": [
      {
        "number": 18,
        "title": "VM4 — SOC / SIEM Wazuh",
        "image": "assets/slides/slide-18.webp",
        "seconds": 15,
        "from": "23:00",
        "to": "23:15"
      },
      {
        "number": 19,
        "title": "Un incident devient une preuve grâce à la corrélation",
        "image": "assets/slides/slide-19.webp",
        "seconds": 45,
        "from": "23:15",
        "to": "24:00"
      }
    ],
    "segments": [
      {
        "slide": 18,
        "seconds": 15,
        "text": "Les événements Windows 4624, 4625, 4768 et 4719 complètent cette visibilité. La chaîne va donc de la collecte à la réponse, mais elle doit être testée pour éviter les faux positifs."
      },
      {
        "slide": 19,
        "seconds": 45,
        "text": "Je ne veux pas seulement dire que Wazuh est installé. Je veux montrer ce qu’il se passe lorsqu’un événement arrive. Dans le scénario du compte backdoor, une modification d’un fichier sensible est détectée par le FIM. La règle custom qualifie l’événement. Les journaux déportés permettent de conserver la preuve même si l’hôte est altéré. L’Active Response peut contenir la source selon le cas, puis l’administrateur documente l’analyse et le retour à l’état sain."
      }
    ],
    "points": [
      "Wazuh centralise les événements",
      "Sept agents au total dont six distants",
      "Suricata, FIM, auditd et événements Windows",
      "Collecter → détecter → corréler → répondre",
      "Sept règles custom et Active Response"
    ],
    "definitions": [
      {
        "term": "Agent Wazuh",
        "detail": "Composant installé sur une machine qui collecte et transmet ses événements."
      },
      {
        "term": "Manager Wazuh",
        "detail": "Serveur qui décode, analyse, corrèle et déclenche les réponses."
      },
      {
        "term": "Corrélation",
        "detail": "Mise en relation de plusieurs événements afin de détecter un scénario plus significatif."
      },
      {
        "term": "FIM",
        "detail": "File Integrity Monitoring : détection des créations, modifications et suppressions de fichiers surveillés."
      }
    ],
    "competencies": [
      {
        "code": "CP8",
        "label": "Participer à la mesure et à l’analyse du niveau de sécurité de l’infrastructure"
      },
      {
        "code": "CP10",
        "label": "Participer à la détection et au traitement des incidents de sécurité"
      }
    ],
    "traps": [
      "Sur VM4, le manager surveille aussi l’hôte local ; les six autres machines utilisent un agent distant.",
      "Une réponse automatique doit être limitée et testée pour éviter de bloquer un service légitime."
    ],
    "transition": "À 23:15, passe de la slide 18 à la slide 19 : « Je ne veux pas seulement dire que Wazuh est installé. »"
  },
  {
    "id": 24,
    "range": "24:00–25:00",
    "title": "Transition slides 19 → 20",
    "slides": [
      {
        "number": 19,
        "title": "Un incident devient une preuve grâce à la corrélation",
        "image": "assets/slides/slide-19.webp",
        "seconds": 55,
        "from": "24:00",
        "to": "24:55"
      },
      {
        "number": 20,
        "title": "VM5, VM6, VM7 — L’identité hybride",
        "image": "assets/slides/slide-20.webp",
        "seconds": 5,
        "from": "24:55",
        "to": "25:00"
      }
    ],
    "segments": [
      {
        "slide": 19,
        "seconds": 55,
        "text": "Le PFE rapporte cinq incidents de validation avec une détection à 100 %. À l’oral, je dois présenter cette information avec le périmètre exact des cas testés et les éléments réellement prouvés, sans transformer un test de maquette en garantie de production. La réponse active doit rester proportionnée. Un blocage temporaire limite le risque d’auto-blocage et de faux positif. En production, les règles seraient réglées sur les données réelles, avec une procédure d’escalade et un retour d’expérience."
      },
      {
        "slide": 20,
        "seconds": 5,
        "text": "Le modèle d’identité est volontairement hybride."
      }
    ],
    "points": [
      "Collecter → détecter → corréler → répondre",
      "Sept règles custom et Active Response",
      "Capitaliser avec le RETEX",
      "OpenLDAP + SSSD pour Linux",
      "AD + DNS + Kerberos + GPO pour Windows"
    ],
    "definitions": [
      {
        "term": "Corrélation",
        "detail": "Mise en relation de plusieurs événements afin de détecter un scénario plus significatif."
      },
      {
        "term": "FIM",
        "detail": "File Integrity Monitoring : détection des créations, modifications et suppressions de fichiers surveillés."
      },
      {
        "term": "SSSD",
        "detail": "Service Linux qui met en cache et fournit les identités et authentifications d’un annuaire."
      },
      {
        "term": "Kerberos",
        "detail": "Protocole d’authentification par tickets évitant de transmettre le mot de passe à chaque service."
      }
    ],
    "competencies": [
      {
        "code": "CP8",
        "label": "Participer à la mesure et à l’analyse du niveau de sécurité de l’infrastructure"
      },
      {
        "code": "CP10",
        "label": "Participer à la détection et au traitement des incidents de sécurité"
      },
      {
        "code": "CP3",
        "label": "Administrer et sécuriser les infrastructures systèmes"
      },
      {
        "code": "CP5",
        "label": "Concevoir une solution technique répondant à des besoins d’évolution de l’infrastructure"
      },
      {
        "code": "CP9",
        "label": "Participer à l’élaboration et à la mise en œuvre de la politique de sécurité"
      }
    ],
    "traps": [
      "Une réponse automatique doit être limitée et testée pour éviter de bloquer un service légitime.",
      "Deux annuaires répondent à deux besoins, mais créent une dette de cohérence."
    ],
    "transition": "À 24:55, passe de la slide 19 à la slide 20 : « Le modèle d’identité est volontairement hybride. »"
  },
  {
    "id": 25,
    "range": "25:00–26:00",
    "title": "Slide 20 · VM5, VM6, VM7 — L’identité hybride",
    "slides": [
      {
        "number": 20,
        "title": "VM5, VM6, VM7 — L’identité hybride",
        "image": "assets/slides/slide-20.webp",
        "seconds": 60,
        "from": "25:00",
        "to": "26:00"
      }
    ],
    "segments": [
      {
        "slide": 20,
        "seconds": 60,
        "text": "OpenLDAP fournit l’annuaire Linux avec le suffixe dc=dataforge,dc=lab. SSSD permet aux hôtes Linux d’interroger cette identité centralisée et LDAPS protège les échanges. Active Directory fournit le domaine dataforge. lab côté Windows, avec DNS, Kerberos et GPO. VM7 est jointe au domaine, ce qui permet de montrer la chaîne d’authentification du poste vers le contrôleur de domaine. Le référentiel d’identité prévoit 19 utilisateurs métier, cinq comptes de service et huit groupes de sécurité. Les droits sont portés par les rôles et non par des autorisations individuelles dispersées. Les comptes de service doivent être non interactifs et limités."
      }
    ],
    "points": [
      "OpenLDAP + SSSD pour Linux",
      "AD + DNS + Kerberos + GPO pour Windows",
      "19 utilisateurs, cinq services, huit groupes"
    ],
    "definitions": [
      {
        "term": "SSSD",
        "detail": "Service Linux qui met en cache et fournit les identités et authentifications d’un annuaire."
      },
      {
        "term": "Kerberos",
        "detail": "Protocole d’authentification par tickets évitant de transmettre le mot de passe à chaque service."
      }
    ],
    "competencies": [
      {
        "code": "CP3",
        "label": "Administrer et sécuriser les infrastructures systèmes"
      },
      {
        "code": "CP5",
        "label": "Concevoir une solution technique répondant à des besoins d’évolution de l’infrastructure"
      },
      {
        "code": "CP9",
        "label": "Participer à l’élaboration et à la mise en œuvre de la politique de sécurité"
      }
    ],
    "traps": [
      "Deux annuaires répondent à deux besoins, mais créent une dette de cohérence."
    ],
    "transition": "À 26:00, reste sur la slide 20 et poursuis sans accélérer."
  },
  {
    "id": 26,
    "range": "26:00–27:00",
    "title": "Transition slides 20 → 21",
    "slides": [
      {
        "number": 20,
        "title": "VM5, VM6, VM7 — L’identité hybride",
        "image": "assets/slides/slide-20.webp",
        "seconds": 30,
        "from": "26:00",
        "to": "26:30"
      },
      {
        "number": 21,
        "title": "VM6 — Preuve de la chaîne d’identité",
        "image": "assets/slides/slide-21.webp",
        "seconds": 30,
        "from": "26:30",
        "to": "27:00"
      }
    ],
    "segments": [
      {
        "slide": 20,
        "seconds": 30,
        "text": "Pourquoi deux annuaires ? Parce que les besoins Linux et Windows ne sont pas identiques et qu’une migration complète vers un seul annuaire aurait ajouté un risque et un coût. En revanche, cette décision crée une dette de cohérence que je dois traiter dans la gouvernance."
      },
      {
        "slide": 21,
        "seconds": 30,
        "text": "Cette capture prouve la chaîne Windows de bout en bout. VM7 utilise le DNS du domaine dataforge. lab, s’authentifie auprès de VM6 et reçoit un ticket Kerberos chiffré en AES-256. Les huit groupes de sécurité portent le RBAC."
      }
    ],
    "points": [
      "OpenLDAP + SSSD pour Linux",
      "AD + DNS + Kerberos + GPO pour Windows",
      "19 utilisateurs, cinq services, huit groupes",
      "VM7 utilise le DNS du domaine",
      "Ticket Kerberos AES-256"
    ],
    "definitions": [
      {
        "term": "SSSD",
        "detail": "Service Linux qui met en cache et fournit les identités et authentifications d’un annuaire."
      },
      {
        "term": "Kerberos",
        "detail": "Protocole d’authentification par tickets évitant de transmettre le mot de passe à chaque service."
      },
      {
        "term": "TGT",
        "detail": "Ticket initial Kerberos permettant ensuite de demander des tickets de service."
      },
      {
        "term": "RBAC",
        "detail": "Contrôle d’accès fondé sur les rôles portés par des groupes, pas sur des droits individuels dispersés."
      }
    ],
    "competencies": [
      {
        "code": "CP3",
        "label": "Administrer et sécuriser les infrastructures systèmes"
      },
      {
        "code": "CP5",
        "label": "Concevoir une solution technique répondant à des besoins d’évolution de l’infrastructure"
      },
      {
        "code": "CP9",
        "label": "Participer à l’élaboration et à la mise en œuvre de la politique de sécurité"
      }
    ],
    "traps": [
      "Deux annuaires répondent à deux besoins, mais créent une dette de cohérence.",
      "Un groupe AD ne produit un droit que lorsqu’une ACL ou une GPO l’exploite."
    ],
    "transition": "À 26:30, passe de la slide 20 à la slide 21 : « Cette capture prouve la chaîne Windows de bout en bout. »"
  },
  {
    "id": 27,
    "range": "27:00–28:00",
    "title": "Transition slides 21 → 22",
    "slides": [
      {
        "number": 21,
        "title": "VM6 — Preuve de la chaîne d’identité",
        "image": "assets/slides/slide-21.webp",
        "seconds": 40,
        "from": "27:00",
        "to": "27:40"
      },
      {
        "number": 22,
        "title": "L’identité hybride déplace le risque vers la cohérence",
        "image": "assets/slides/slide-22.webp",
        "seconds": 20,
        "from": "27:40",
        "to": "28:00"
      }
    ],
    "segments": [
      {
        "slide": 21,
        "seconds": 40,
        "text": "La GPO de Groupes restreints transforme l’appartenance au groupe sysadmins en droit d’administration locale, sans permission attribuée directement à l’utilisateur. Les événements 4624, 4625, 4768 et 4719 sont remontés à Wazuh. La limite est un contrôleur de domaine unique et l’absence de MFA généralisé ; en production, j’ajouterais redondance, comptes privilégiés séparés et MFA sur les opérations sensibles."
      },
      {
        "slide": 22,
        "seconds": 20,
        "text": "Le choix hybride répond au besoin, mais il concentre le risque sur la cohérence. Si un utilisateur est désactivé dans Active Directory mais reste actif dans OpenLDAP, le contrôle d’accès devient incohérent."
      }
    ],
    "points": [
      "VM7 utilise le DNS du domaine",
      "Ticket Kerberos AES-256",
      "GPO et groupes appliquent le RBAC",
      "Identifier le risque de divergence",
      "Reconnaître la synchronisation manuelle"
    ],
    "definitions": [
      {
        "term": "TGT",
        "detail": "Ticket initial Kerberos permettant ensuite de demander des tickets de service."
      },
      {
        "term": "RBAC",
        "detail": "Contrôle d’accès fondé sur les rôles portés par des groupes, pas sur des droits individuels dispersés."
      },
      {
        "term": "Compte orphelin",
        "detail": "Compte encore actif dans un système alors que son propriétaire n’a plus besoin d’accès."
      },
      {
        "term": "Réconciliation",
        "detail": "Comparaison régulière des annuaires et droits pour détecter les écarts."
      }
    ],
    "competencies": [
      {
        "code": "CP3",
        "label": "Administrer et sécuriser les infrastructures systèmes"
      },
      {
        "code": "CP9",
        "label": "Participer à l’élaboration et à la mise en œuvre de la politique de sécurité"
      },
      {
        "code": "CP8",
        "label": "Participer à la mesure et à l’analyse du niveau de sécurité de l’infrastructure"
      }
    ],
    "traps": [
      "Un groupe AD ne produit un droit que lorsqu’une ACL ou une GPO l’exploite.",
      "Ne prétends pas avoir automatisé la synchronisation si la maquette la contrôle manuellement."
    ],
    "transition": "À 27:40, passe de la slide 21 à la slide 22 : « Le choix hybride répond au besoin, mais il concentre le risque sur la cohérence. »"
  },
  {
    "id": 28,
    "range": "28:00–29:00",
    "title": "Slide 22 · L’identité hybride déplace le risque vers la cohérence",
    "slides": [
      {
        "number": 22,
        "title": "L’identité hybride déplace le risque vers la cohérence",
        "image": "assets/slides/slide-22.webp",
        "seconds": 60,
        "from": "28:00",
        "to": "29:00"
      }
    ],
    "segments": [
      {
        "slide": 22,
        "seconds": 60,
        "text": "La même difficulté existe pour les groupes, les unités organisationnelles et les comptes de service. Je ne prétends pas avoir mis en place une synchronisation automatique complète dans la maquette. Le mécanisme est documenté et contrôlé manuellement, ce qui constitue une limite. En production, je choisirais une source de vérité, probablement Active Directory pour le périmètre Windows, puis un provisionnement automatisé vers LDAP avec un outil dédié ou un connecteur SCIM. Je mettrais en place des contrôles de réconciliation, une revue périodique des droits et une alerte sur les comptes orphelins. Cette réponse montre le lien entre architecture et gouvernance : le risque n’est pas seulement technique,"
      }
    ],
    "points": [
      "Identifier le risque de divergence",
      "Reconnaître la synchronisation manuelle",
      "Choisir une source de vérité en production"
    ],
    "definitions": [
      {
        "term": "Compte orphelin",
        "detail": "Compte encore actif dans un système alors que son propriétaire n’a plus besoin d’accès."
      },
      {
        "term": "Réconciliation",
        "detail": "Comparaison régulière des annuaires et droits pour détecter les écarts."
      }
    ],
    "competencies": [
      {
        "code": "CP3",
        "label": "Administrer et sécuriser les infrastructures systèmes"
      },
      {
        "code": "CP8",
        "label": "Participer à la mesure et à l’analyse du niveau de sécurité de l’infrastructure"
      },
      {
        "code": "CP9",
        "label": "Participer à l’élaboration et à la mise en œuvre de la politique de sécurité"
      }
    ],
    "traps": [
      "Ne prétends pas avoir automatisé la synchronisation si la maquette la contrôle manuellement."
    ],
    "transition": "À 29:00, reste sur la slide 22 et poursuis sans accélérer."
  },
  {
    "id": 29,
    "range": "29:00–30:00",
    "title": "Transition slides 22 → 23",
    "slides": [
      {
        "number": 22,
        "title": "L’identité hybride déplace le risque vers la cohérence",
        "image": "assets/slides/slide-22.webp",
        "seconds": 5,
        "from": "29:00",
        "to": "29:05"
      },
      {
        "number": 23,
        "title": "Défense en profondeur — 7 couches",
        "image": "assets/slides/slide-23.webp",
        "seconds": 55,
        "from": "29:05",
        "to": "30:00"
      }
    ],
    "segments": [
      {
        "slide": 22,
        "seconds": 5,
        "text": "il vient aussi du cycle de vie des identités."
      },
      {
        "slide": 23,
        "seconds": 55,
        "text": "La défense en profondeur consiste à ne pas dépendre d’un seul contrôle. Dans DataForge, la première couche est l’accès par le bastion. La deuxième est le transport chiffré WireGuard. La troisième est le filtrage réseau. La quatrième est le durcissement de l’hôte et l’auditd. La cinquième est l’isolation des conteneurs. La sixième est la détection avec FIM, Suricata et Wazuh. La septième est la reprise par les sauvegardes et le PRA. L’intérêt est qu’une compromission n’ouvre pas automatiquement tout le périmètre. L’attaquant doit franchir plusieurs contrôles et laisse davantage de signaux. Cette approche a aussi un coût : chaque couche doit être configurée, supervisée et maintenue."
      }
    ],
    "points": [
      "Identifier le risque de divergence",
      "Reconnaître la synchronisation manuelle",
      "Choisir une source de vérité en production",
      "Sept couches indépendantes",
      "Limiter le rayon d’impact"
    ],
    "definitions": [
      {
        "term": "Compte orphelin",
        "detail": "Compte encore actif dans un système alors que son propriétaire n’a plus besoin d’accès."
      },
      {
        "term": "Réconciliation",
        "detail": "Comparaison régulière des annuaires et droits pour détecter les écarts."
      },
      {
        "term": "Défense en profondeur",
        "detail": "Association de plusieurs contrôles complémentaires pour éviter une dépendance unique."
      },
      {
        "term": "Rayon d’impact",
        "detail": "Étendue maximale des dommages possibles après la compromission d’un composant."
      }
    ],
    "competencies": [
      {
        "code": "CP3",
        "label": "Administrer et sécuriser les infrastructures systèmes"
      },
      {
        "code": "CP8",
        "label": "Participer à la mesure et à l’analyse du niveau de sécurité de l’infrastructure"
      },
      {
        "code": "CP9",
        "label": "Participer à l’élaboration et à la mise en œuvre de la politique de sécurité"
      },
      {
        "code": "CP1",
        "label": "Appliquer les bonnes pratiques dans l’administration des infrastructures"
      },
      {
        "code": "CP2",
        "label": "Administrer et sécuriser les infrastructures réseaux"
      },
      {
        "code": "CP7",
        "label": "Mettre en œuvre et optimiser la supervision des infrastructures"
      },
      {
        "code": "CP10",
        "label": "Participer à la détection et au traitement des incidents de sécurité"
      }
    ],
    "traps": [
      "Ne prétends pas avoir automatisé la synchronisation si la maquette la contrôle manuellement.",
      "Empiler des outils sans gouvernance augmente le bruit et la dette d’exploitation."
    ],
    "transition": "À 29:05, passe de la slide 22 à la slide 23 : « La défense en profondeur consiste à ne pas dépendre d’un seul contrôle. »"
  },
  {
    "id": 30,
    "range": "30:00–31:00",
    "title": "Transition slides 23 → 24",
    "slides": [
      {
        "number": 23,
        "title": "Défense en profondeur — 7 couches",
        "image": "assets/slides/slide-23.webp",
        "seconds": 20,
        "from": "30:00",
        "to": "30:20"
      },
      {
        "number": 24,
        "title": "Politique de sécurité & sensibilisation",
        "image": "assets/slides/slide-24.webp",
        "seconds": 40,
        "from": "30:20",
        "to": "31:00"
      }
    ],
    "segments": [
      {
        "slide": 23,
        "seconds": 20,
        "text": "Une règle inutile augmente le bruit ou peut casser un service. C’est pourquoi je relie les contrôles à l’analyse de risques et à des tests, plutôt que d’empiler des outils."
      },
      {
        "slide": 24,
        "seconds": 40,
        "text": "La sécurité ne tient pas uniquement aux commandes exécutées sur les serveurs. La PSSI transforme les mesures en règles de fonctionnement et en responsabilités. Elle précise qui peut accéder, qui valide une évolution, comment on conserve les traces et comment on réagit à un incident. Dans DataForge, elle couvre les sept VMs, le réseau WireGuard, les données PostgreSQL, les deux annuaires et les journaux du SOC. Elle doit être reliée aux contrôles réellement déployés :"
      }
    ],
    "points": [
      "Sept couches indépendantes",
      "Limiter le rayon d’impact",
      "Tester chaque contrôle contre un risque",
      "Transformer les mesures en règles",
      "Définir responsabilités et cycle de révision"
    ],
    "definitions": [
      {
        "term": "Défense en profondeur",
        "detail": "Association de plusieurs contrôles complémentaires pour éviter une dépendance unique."
      },
      {
        "term": "Rayon d’impact",
        "detail": "Étendue maximale des dommages possibles après la compromission d’un composant."
      },
      {
        "term": "PSSI",
        "detail": "Politique de sécurité des systèmes d’information : règles, objectifs et responsabilités de sécurité."
      },
      {
        "term": "RACI",
        "detail": "Matrice identifiant responsable, approbateur, consulté et informé pour une activité."
      }
    ],
    "competencies": [
      {
        "code": "CP1",
        "label": "Appliquer les bonnes pratiques dans l’administration des infrastructures"
      },
      {
        "code": "CP2",
        "label": "Administrer et sécuriser les infrastructures réseaux"
      },
      {
        "code": "CP3",
        "label": "Administrer et sécuriser les infrastructures systèmes"
      },
      {
        "code": "CP7",
        "label": "Mettre en œuvre et optimiser la supervision des infrastructures"
      },
      {
        "code": "CP10",
        "label": "Participer à la détection et au traitement des incidents de sécurité"
      },
      {
        "code": "CP8",
        "label": "Participer à la mesure et à l’analyse du niveau de sécurité de l’infrastructure"
      },
      {
        "code": "CP9",
        "label": "Participer à l’élaboration et à la mise en œuvre de la politique de sécurité"
      }
    ],
    "traps": [
      "Empiler des outils sans gouvernance augmente le bruit et la dette d’exploitation.",
      "Une PSSI non appliquée, non mesurée ou jamais révisée reste un document théorique."
    ],
    "transition": "À 30:20, passe de la slide 23 à la slide 24 : « La sécurité ne tient pas uniquement aux commandes exécutées sur les serveurs. »"
  },
  {
    "id": 31,
    "range": "31:00–32:00",
    "title": "Transition slides 24 → 25",
    "slides": [
      {
        "number": 24,
        "title": "Politique de sécurité & sensibilisation",
        "image": "assets/slides/slide-24.webp",
        "seconds": 30,
        "from": "31:00",
        "to": "31:30"
      },
      {
        "number": 25,
        "title": "Tests, validation & PCA / PRA",
        "image": "assets/slides/slide-25.webp",
        "seconds": 30,
        "from": "31:30",
        "to": "32:00"
      }
    ],
    "segments": [
      {
        "slide": 24,
        "seconds": 30,
        "text": "par exemple la règle de moindre privilège se traduit par les groupes et les comptes de service ; la règle de traçabilité se traduit par Wazuh, auditd et la conservation des logs. La PSSI prévoit aussi une révision annuelle et une mise à jour après un incident majeur. Elle sert donc à éviter que les choix de la maquette deviennent des actions isolées et non maintenables."
      },
      {
        "slide": 25,
        "seconds": 30,
        "text": "Le PCA et le PRA répondent à l’événement d’indisponibilité et aux besoins d’intégrité. L’objectif annoncé est un RTO inférieur à quatre heures et un RPO inférieur à vingt-quatre heures, avec un objectif de MTTR inférieur à deux heures. Les sauvegardes couvrent les différents types de données."
      }
    ],
    "points": [
      "Transformer les mesures en règles",
      "Définir responsabilités et cycle de révision",
      "Relier PSSI et contrôles réels",
      "RTO < 4 h, RPO < 24 h, MTTR < 2 h",
      "Sauvegarder PostgreSQL, LDAP, AD et configurations"
    ],
    "definitions": [
      {
        "term": "PSSI",
        "detail": "Politique de sécurité des systèmes d’information : règles, objectifs et responsabilités de sécurité."
      },
      {
        "term": "RACI",
        "detail": "Matrice identifiant responsable, approbateur, consulté et informé pour une activité."
      },
      {
        "term": "RTO",
        "detail": "Durée maximale acceptable avant le rétablissement d’un service."
      },
      {
        "term": "RPO",
        "detail": "Quantité maximale de données, exprimée en temps, que l’organisation accepte de perdre."
      }
    ],
    "competencies": [
      {
        "code": "CP1",
        "label": "Appliquer les bonnes pratiques dans l’administration des infrastructures"
      },
      {
        "code": "CP8",
        "label": "Participer à la mesure et à l’analyse du niveau de sécurité de l’infrastructure"
      },
      {
        "code": "CP9",
        "label": "Participer à l’élaboration et à la mise en œuvre de la politique de sécurité"
      },
      {
        "code": "CP6",
        "label": "Mettre en production des évolutions de l’infrastructure"
      },
      {
        "code": "CP7",
        "label": "Mettre en œuvre et optimiser la supervision des infrastructures"
      },
      {
        "code": "CP10",
        "label": "Participer à la détection et au traitement des incidents de sécurité"
      }
    ],
    "traps": [
      "Une PSSI non appliquée, non mesurée ou jamais révisée reste un document théorique.",
      "Une sauvegarde réussie n’est pas une preuve de restaurabilité."
    ],
    "transition": "À 31:30, passe de la slide 24 à la slide 25 : « Le PCA et le PRA répondent à l’événement d’indisponibilité et aux besoins d’intégrité. »"
  },
  {
    "id": 32,
    "range": "32:00–33:00",
    "title": "Slide 25 · Tests, validation & PCA / PRA",
    "slides": [
      {
        "number": 25,
        "title": "Tests, validation & PCA / PRA",
        "image": "assets/slides/slide-25.webp",
        "seconds": 60,
        "from": "32:00",
        "to": "33:00"
      }
    ],
    "segments": [
      {
        "slide": 25,
        "seconds": 60,
        "text": "PostgreSQL est exporté par dump. OpenLDAP est exporté en LDIF avec slapcat. Active Directory s’appuie sur Windows Server Backup pour le System State et sur LDIFDE selon la procédure. Les configurations critiques de VM1 sont répliquées et versionnées. Je distingue toujours la sauvegarde du test. Pour prouver la restauration, je restaure dans un environnement isolé, je vérifie les tables et les utilisateurs, puis je teste une fonctionnalité. Pour les annuaires, je contrôle les 19 comptes, les groupes et l’authentification. La limite est l’absence de dispositif 3-2-1 complètement industrialisé et de redondance complète."
      }
    ],
    "points": [
      "RTO < 4 h, RPO < 24 h, MTTR < 2 h",
      "Sauvegarder PostgreSQL, LDAP, AD et configurations",
      "Tester réellement la restauration"
    ],
    "definitions": [
      {
        "term": "RTO",
        "detail": "Durée maximale acceptable avant le rétablissement d’un service."
      },
      {
        "term": "RPO",
        "detail": "Quantité maximale de données, exprimée en temps, que l’organisation accepte de perdre."
      }
    ],
    "competencies": [
      {
        "code": "CP1",
        "label": "Appliquer les bonnes pratiques dans l’administration des infrastructures"
      },
      {
        "code": "CP6",
        "label": "Mettre en production des évolutions de l’infrastructure"
      },
      {
        "code": "CP7",
        "label": "Mettre en œuvre et optimiser la supervision des infrastructures"
      },
      {
        "code": "CP8",
        "label": "Participer à la mesure et à l’analyse du niveau de sécurité de l’infrastructure"
      },
      {
        "code": "CP10",
        "label": "Participer à la détection et au traitement des incidents de sécurité"
      }
    ],
    "traps": [
      "Une sauvegarde réussie n’est pas une preuve de restaurabilité."
    ],
    "transition": "À 33:00, reste sur la slide 25 et poursuis sans accélérer."
  },
  {
    "id": 33,
    "range": "33:00–34:00",
    "title": "Transition slides 25 → 26",
    "slides": [
      {
        "number": 25,
        "title": "Tests, validation & PCA / PRA",
        "image": "assets/slides/slide-25.webp",
        "seconds": 5,
        "from": "33:00",
        "to": "33:05"
      },
      {
        "number": 26,
        "title": "La validation relie chaque objectif à une preuve",
        "image": "assets/slides/slide-26.webp",
        "seconds": 55,
        "from": "33:05",
        "to": "34:00"
      }
    ],
    "segments": [
      {
        "slide": 25,
        "seconds": 5,
        "text": "La production ajouterait stockage hors ligne, chiffrement, rétention, surveillance des jobs et tests réguliers."
      },
      {
        "slide": 26,
        "seconds": 55,
        "text": "Je rassemble ici les résultats mesurés. Les audits Lynis donnent 70 pour VM1, 72 pour VM2, 72 pour VM4 et 71 pour VM5. Il ne faut pas transformer ces scores en notes scolaires : ils servent à comparer le niveau de durcissement sur un périmètre Linux défini. Le SOC dispose de sept règles custom, d’une surveillance FIM, de neuf règles auditd et d’une détection Suricata. Le PFE rapporte cinq incidents de validation détectés dans le périmètre testé. La supervision prévoit sept cibles dans la cible finale, avec des exporters adaptés aux systèmes."
      }
    ],
    "points": [
      "RTO < 4 h, RPO < 24 h, MTTR < 2 h",
      "Sauvegarder PostgreSQL, LDAP, AD et configurations",
      "Tester réellement la restauration",
      "Lynis : 70, 72, 72 et 71",
      "Sept règles custom, neuf règles auditd, cinq incidents"
    ],
    "definitions": [
      {
        "term": "RTO",
        "detail": "Durée maximale acceptable avant le rétablissement d’un service."
      },
      {
        "term": "RPO",
        "detail": "Quantité maximale de données, exprimée en temps, que l’organisation accepte de perdre."
      },
      {
        "term": "Indice Lynis",
        "detail": "Indicateur de durcissement utile pour comparer un même périmètre ; ce n’est pas une note absolue."
      },
      {
        "term": "Preuve de validation",
        "detail": "Résultat reproductible montrant qu’un contrôle remplit l’objectif attendu."
      }
    ],
    "competencies": [
      {
        "code": "CP1",
        "label": "Appliquer les bonnes pratiques dans l’administration des infrastructures"
      },
      {
        "code": "CP6",
        "label": "Mettre en production des évolutions de l’infrastructure"
      },
      {
        "code": "CP7",
        "label": "Mettre en œuvre et optimiser la supervision des infrastructures"
      },
      {
        "code": "CP8",
        "label": "Participer à la mesure et à l’analyse du niveau de sécurité de l’infrastructure"
      },
      {
        "code": "CP10",
        "label": "Participer à la détection et au traitement des incidents de sécurité"
      }
    ],
    "traps": [
      "Une sauvegarde réussie n’est pas une preuve de restaurabilité.",
      "Les scores Lynis ne prouvent pas à eux seuls qu’une machine est sécurisée."
    ],
    "transition": "À 33:05, passe de la slide 25 à la slide 26 : « Je rassemble ici les résultats mesurés. »"
  },
  {
    "id": 34,
    "range": "34:00–35:00",
    "title": "Transition slides 26 → 27",
    "slides": [
      {
        "number": 26,
        "title": "La validation relie chaque objectif à une preuve",
        "image": "assets/slides/slide-26.webp",
        "seconds": 40,
        "from": "34:00",
        "to": "34:40"
      },
      {
        "number": 27,
        "title": "Limites assumées & axes d’amélioration",
        "image": "assets/slides/slide-27.webp",
        "seconds": 20,
        "from": "34:40",
        "to": "35:00"
      }
    ],
    "segments": [
      {
        "slide": 26,
        "seconds": 40,
        "text": "Les objectifs de continuité sont chiffrés et les procédures de restauration sont décrites et testées selon le dossier. La conclusion raisonnable est donc la suivante : la maquette démontre une chaîne cohérente de conception, de déploiement, de mesure et de réponse. Elle ne démontre pas encore la disponibilité d’une plateforme industrielle redondée avec une équipe d’exploitation 24/7. Cette nuance est précisément ce que je vais développer dans les limites."
      },
      {
        "slide": 27,
        "seconds": 20,
        "text": "Je présente les limites sans les minimiser. La maquette démontre une architecture cloisonnée, un durcissement, une identité hybride, un SOC, une supervision, des sauvegardes et une analyse de risques. Elle conserve néanmoins des limites. VM1 est un SPOF."
      }
    ],
    "points": [
      "Lynis : 70, 72, 72 et 71",
      "Sept règles custom, neuf règles auditd, cinq incidents",
      "Présenter ce qui est mesuré sans surpromettre",
      "Assumer les SPOF et écarts de production",
      "IDS non inline et MFA non généralisé"
    ],
    "definitions": [
      {
        "term": "Indice Lynis",
        "detail": "Indicateur de durcissement utile pour comparer un même périmètre ; ce n’est pas une note absolue."
      },
      {
        "term": "Preuve de validation",
        "detail": "Résultat reproductible montrant qu’un contrôle remplit l’objectif attendu."
      },
      {
        "term": "Maquette",
        "detail": "Environnement contrôlé qui démontre une architecture et ses mécanismes."
      },
      {
        "term": "Production",
        "detail": "Service exploitable avec disponibilité, support, capacité, conformité et continuité garanties."
      }
    ],
    "competencies": [
      {
        "code": "CP6",
        "label": "Mettre en production des évolutions de l’infrastructure"
      },
      {
        "code": "CP7",
        "label": "Mettre en œuvre et optimiser la supervision des infrastructures"
      },
      {
        "code": "CP8",
        "label": "Participer à la mesure et à l’analyse du niveau de sécurité de l’infrastructure"
      },
      {
        "code": "CP10",
        "label": "Participer à la détection et au traitement des incidents de sécurité"
      },
      {
        "code": "CP5",
        "label": "Concevoir une solution technique répondant à des besoins d’évolution de l’infrastructure"
      },
      {
        "code": "CP9",
        "label": "Participer à l’élaboration et à la mise en œuvre de la politique de sécurité"
      }
    ],
    "traps": [
      "Les scores Lynis ne prouvent pas à eux seuls qu’une machine est sécurisée.",
      "Une limite cachée fragilise le discours ; une limite maîtrisée démontre ton recul professionnel."
    ],
    "transition": "À 34:40, passe de la slide 26 à la slide 27 : « Je présente les limites sans les minimiser. »"
  },
  {
    "id": 35,
    "range": "35:00–36:00",
    "title": "Slide 27 · Limites assumées & axes d’amélioration",
    "slides": [
      {
        "number": 27,
        "title": "Limites assumées & axes d’amélioration",
        "image": "assets/slides/slide-27.webp",
        "seconds": 60,
        "from": "35:00",
        "to": "36:00"
      }
    ],
    "segments": [
      {
        "slide": 27,
        "seconds": 60,
        "text": "Suricata est en IDS et non en IPS inline. Le MFA est prioritaire sur le bastion mais n’est pas généralisé à tous les flux. La synchronisation entre les annuaires reste manuelle. La segmentation est logique, pas physique. VirtualBox est adapté à la maquette mais pas suffisant seul pour une production industrielle. Enfin, le coût de 34 000 euros par an est une estimation à défendre par hypothèses : cloud, matériel, support, sauvegardes, exploitation et temps humain. Une limite n’est pas un échec lorsqu’elle est identifiée, reliée à un risque et associée à une trajectoire. Le jury doit voir que je sais faire la différence entre une fonctionnalité qui fonctionne dans un lab"
      }
    ],
    "points": [
      "Assumer les SPOF et écarts de production",
      "IDS non inline et MFA non généralisé",
      "Relier chaque limite à une trajectoire"
    ],
    "definitions": [
      {
        "term": "Maquette",
        "detail": "Environnement contrôlé qui démontre une architecture et ses mécanismes."
      },
      {
        "term": "Production",
        "detail": "Service exploitable avec disponibilité, support, capacité, conformité et continuité garanties."
      }
    ],
    "competencies": [
      {
        "code": "CP5",
        "label": "Concevoir une solution technique répondant à des besoins d’évolution de l’infrastructure"
      },
      {
        "code": "CP6",
        "label": "Mettre en production des évolutions de l’infrastructure"
      },
      {
        "code": "CP8",
        "label": "Participer à la mesure et à l’analyse du niveau de sécurité de l’infrastructure"
      },
      {
        "code": "CP9",
        "label": "Participer à l’élaboration et à la mise en œuvre de la politique de sécurité"
      },
      {
        "code": "CP10",
        "label": "Participer à la détection et au traitement des incidents de sécurité"
      }
    ],
    "traps": [
      "Une limite cachée fragilise le discours ; une limite maîtrisée démontre ton recul professionnel."
    ],
    "transition": "À 36:00, reste sur la slide 27 et poursuis sans accélérer."
  },
  {
    "id": 36,
    "range": "36:00–37:00",
    "title": "Transition slides 27 → 28",
    "slides": [
      {
        "number": 27,
        "title": "Limites assumées & axes d’amélioration",
        "image": "assets/slides/slide-27.webp",
        "seconds": 10,
        "from": "36:00",
        "to": "36:10"
      },
      {
        "number": 28,
        "title": "La production est estimée à 34 000 € par an",
        "image": "assets/slides/slide-28.webp",
        "seconds": 50,
        "from": "36:10",
        "to": "37:00"
      }
    ],
    "segments": [
      {
        "slide": 27,
        "seconds": 10,
        "text": "et un service que l’on peut exploiter avec des exigences de disponibilité et de support."
      },
      {
        "slide": 28,
        "seconds": 50,
        "text": "Pour industrialiser DataForge, je ne commencerais pas par ajouter des outils. Je traiterais trois axes. Le premier est la résilience : deux gateways, deux contrôleurs de domaine, un stockage redondant, des sauvegardes hors ligne et une vraie procédure de bascule. Le deuxième est l’automatisation : infrastructure as code, pipeline de configuration, provisionnement automatisé des identités, rotation des secrets et gestion des changements. Le troisième est l’exploitation : VLAN ou VRF physiques selon l’environnement,"
      }
    ],
    "points": [
      "Assumer les SPOF et écarts de production",
      "IDS non inline et MFA non généralisé",
      "Relier chaque limite à une trajectoire",
      "Résilience, automatisation, exploitation",
      "Défendre 34 000 € comme une estimation"
    ],
    "definitions": [
      {
        "term": "Maquette",
        "detail": "Environnement contrôlé qui démontre une architecture et ses mécanismes."
      },
      {
        "term": "Production",
        "detail": "Service exploitable avec disponibilité, support, capacité, conformité et continuité garanties."
      },
      {
        "term": "CAPEX / OPEX",
        "detail": "Dépenses d’investissement initiales / dépenses récurrentes d’exploitation."
      },
      {
        "term": "SLA",
        "detail": "Engagement mesurable de niveau de service, par exemple disponibilité ou délai de rétablissement."
      }
    ],
    "competencies": [
      {
        "code": "CP5",
        "label": "Concevoir une solution technique répondant à des besoins d’évolution de l’infrastructure"
      },
      {
        "code": "CP6",
        "label": "Mettre en production des évolutions de l’infrastructure"
      },
      {
        "code": "CP8",
        "label": "Participer à la mesure et à l’analyse du niveau de sécurité de l’infrastructure"
      },
      {
        "code": "CP9",
        "label": "Participer à l’élaboration et à la mise en œuvre de la politique de sécurité"
      },
      {
        "code": "CP10",
        "label": "Participer à la détection et au traitement des incidents de sécurité"
      },
      {
        "code": "CP4",
        "label": "Administrer et sécuriser les infrastructures virtualisées"
      }
    ],
    "traps": [
      "Une limite cachée fragilise le discours ; une limite maîtrisée démontre ton recul professionnel.",
      "Le chiffre de 34 000 € dépend d’hypothèses qu’il faut savoir expliciter."
    ],
    "transition": "À 36:10, passe de la slide 27 à la slide 28 : « Pour industrialiser DataForge, je ne commencerais pas par ajouter des outils. »"
  },
  {
    "id": 37,
    "range": "37:00–38:00",
    "title": "Transition slides 28 → 29",
    "slides": [
      {
        "number": 28,
        "title": "La production est estimée à 34 000 € par an",
        "image": "assets/slides/slide-28.webp",
        "seconds": 50,
        "from": "37:00",
        "to": "37:50"
      },
      {
        "number": 29,
        "title": "Couverture des compétences du titre",
        "image": "assets/slides/slide-29.webp",
        "seconds": 10,
        "from": "37:50",
        "to": "38:00"
      }
    ],
    "segments": [
      {
        "slide": 28,
        "seconds": 50,
        "text": "règles de firewall inter-zones, SIEM dimensionné, procédures d’incident, astreinte et indicateurs SLA. Le coût annoncé de 34 000 euros par an doit être présenté comme une estimation. Avant une décision, il faut préciser les hypothèses : nombre de nœuds, stockage, cloud, support, temps d’administration, sauvegarde, licences éventuelles et niveau de service. Cette trajectoire donne au projet une suite réaliste et permet de montrer que je sais passer d’un prototype contrôlé à une infrastructure gouvernée."
      },
      {
        "slide": 29,
        "seconds": 10,
        "text": "Je termine par la correspondance avec le référentiel. CP1 est illustré par les bonnes pratiques d’administration, le hardening et les sauvegardes."
      }
    ],
    "points": [
      "Résilience, automatisation, exploitation",
      "Défendre 34 000 € comme une estimation",
      "Passer du prototype au service gouverné",
      "Relier CP1 à CP10 à des preuves",
      "Citer les technologies seulement après la compétence"
    ],
    "definitions": [
      {
        "term": "CAPEX / OPEX",
        "detail": "Dépenses d’investissement initiales / dépenses récurrentes d’exploitation."
      },
      {
        "term": "SLA",
        "detail": "Engagement mesurable de niveau de service, par exemple disponibilité ou délai de rétablissement."
      },
      {
        "term": "Compétence",
        "detail": "Capacité démontrée à mobiliser connaissances, méthodes et outils dans une situation professionnelle."
      },
      {
        "term": "Preuve transversale",
        "detail": "Élément qui démontre plusieurs compétences, par exemple un test de restauration documenté."
      }
    ],
    "competencies": [
      {
        "code": "CP4",
        "label": "Administrer et sécuriser les infrastructures virtualisées"
      },
      {
        "code": "CP5",
        "label": "Concevoir une solution technique répondant à des besoins d’évolution de l’infrastructure"
      },
      {
        "code": "CP6",
        "label": "Mettre en production des évolutions de l’infrastructure"
      },
      {
        "code": "CP9",
        "label": "Participer à l’élaboration et à la mise en œuvre de la politique de sécurité"
      },
      {
        "code": "CP1",
        "label": "Appliquer les bonnes pratiques dans l’administration des infrastructures"
      },
      {
        "code": "CP2",
        "label": "Administrer et sécuriser les infrastructures réseaux"
      },
      {
        "code": "CP3",
        "label": "Administrer et sécuriser les infrastructures systèmes"
      },
      {
        "code": "CP7",
        "label": "Mettre en œuvre et optimiser la supervision des infrastructures"
      },
      {
        "code": "CP8",
        "label": "Participer à la mesure et à l’analyse du niveau de sécurité de l’infrastructure"
      },
      {
        "code": "CP10",
        "label": "Participer à la détection et au traitement des incidents de sécurité"
      }
    ],
    "traps": [
      "Le chiffre de 34 000 € dépend d’hypothèses qu’il faut savoir expliciter.",
      "La slide de synthèse ne remplace pas les preuves montrées dans le reste du dossier."
    ],
    "transition": "À 37:50, passe de la slide 28 à la slide 29 : « Je termine par la correspondance avec le référentiel. »"
  },
  {
    "id": 38,
    "range": "38:00–39:00",
    "title": "Slide 29 · Couverture des compétences du titre",
    "slides": [
      {
        "number": 29,
        "title": "Couverture des compétences du titre",
        "image": "assets/slides/slide-29.webp",
        "seconds": 60,
        "from": "38:00",
        "to": "39:00"
      }
    ],
    "segments": [
      {
        "slide": 29,
        "seconds": 60,
        "text": "CP2 par WireGuard, nftables et le filtrage. CP3 par le durcissement Linux, SSSD, AD et les GPO. CP4 par les sept VMs, Oracle Cloud et VirtualBox. CP5 est démontré par le besoin, l’architecture et les choix argumentés. CP6 par le déploiement, la validation, le rollback et le PRA. CP7 par Prometheus, Grafana, Alertmanager et Blackbox. CP8 par EBIOS, Lynis, les audits, le FIM et les indicateurs. CP9 par la PSSI, le RBAC, le Zero Trust et la gouvernance. CP10 par Wazuh, Suricata, les règles custom, la réponse active et les tests d’incident. Cette slide ne remplace pas les preuves. Elle sert de carte de lecture pour le jury."
      }
    ],
    "points": [
      "Relier CP1 à CP10 à des preuves",
      "Citer les technologies seulement après la compétence",
      "Utiliser la slide comme carte de lecture"
    ],
    "definitions": [
      {
        "term": "Compétence",
        "detail": "Capacité démontrée à mobiliser connaissances, méthodes et outils dans une situation professionnelle."
      },
      {
        "term": "Preuve transversale",
        "detail": "Élément qui démontre plusieurs compétences, par exemple un test de restauration documenté."
      }
    ],
    "competencies": [
      {
        "code": "CP1",
        "label": "Appliquer les bonnes pratiques dans l’administration des infrastructures"
      },
      {
        "code": "CP2",
        "label": "Administrer et sécuriser les infrastructures réseaux"
      },
      {
        "code": "CP3",
        "label": "Administrer et sécuriser les infrastructures systèmes"
      },
      {
        "code": "CP4",
        "label": "Administrer et sécuriser les infrastructures virtualisées"
      },
      {
        "code": "CP5",
        "label": "Concevoir une solution technique répondant à des besoins d’évolution de l’infrastructure"
      },
      {
        "code": "CP6",
        "label": "Mettre en production des évolutions de l’infrastructure"
      },
      {
        "code": "CP7",
        "label": "Mettre en œuvre et optimiser la supervision des infrastructures"
      },
      {
        "code": "CP8",
        "label": "Participer à la mesure et à l’analyse du niveau de sécurité de l’infrastructure"
      },
      {
        "code": "CP9",
        "label": "Participer à l’élaboration et à la mise en œuvre de la politique de sécurité"
      },
      {
        "code": "CP10",
        "label": "Participer à la détection et au traitement des incidents de sécurité"
      }
    ],
    "traps": [
      "La slide de synthèse ne remplace pas les preuves montrées dans le reste du dossier."
    ],
    "transition": "À 39:00, reste sur la slide 29 et poursuis sans accélérer."
  },
  {
    "id": 39,
    "range": "39:00–40:00",
    "title": "Transition slides 29 → 30",
    "slides": [
      {
        "number": 29,
        "title": "Couverture des compétences du titre",
        "image": "assets/slides/slide-29.webp",
        "seconds": 10,
        "from": "39:00",
        "to": "39:10"
      },
      {
        "number": 30,
        "title": "Conclusion",
        "image": "assets/slides/slide-30.webp",
        "seconds": 50,
        "from": "39:10",
        "to": "40:00"
      }
    ],
    "segments": [
      {
        "slide": 29,
        "seconds": 10,
        "text": "C’est pourquoi chaque slide précédente porte aussi son ou ses CP et le renvoi au dossier PFE."
      },
      {
        "slide": 30,
        "seconds": 50,
        "text": "Pour conclure, DataForge Industries m’a permis de travailler de bout en bout comme un administrateur d’infrastructures sécurisées. Je suis parti d’un besoin industriel, j’ai hiérarchisé les risques avec EBIOS, conçu une architecture hybride, déployé sept rôles de machines, sécurisé les accès et les flux, construit une identité hybride, mis en place la supervision et le SOC, puis préparé la sauvegarde et la reprise. La valeur du projet tient autant aux contrôles qu’à la capacité de les expliquer et de les mesurer. Je sais dire ce qui est démontré, ce qui est une cible, ce qui reste modéré et ce que je ferais pour passer en production. Je vous remercie pour votre attention. Je suis prêt à répondre à vos questions sur l’architecture, les choix techniques, les risques, les preuves et les limites du projet."
      }
    ],
    "points": [
      "Relier CP1 à CP10 à des preuves",
      "Citer les technologies seulement après la compétence",
      "Utiliser la slide comme carte de lecture",
      "Résumer la chaîne complète",
      "Rappeler cible, preuves et risques résiduels"
    ],
    "definitions": [
      {
        "term": "Compétence",
        "detail": "Capacité démontrée à mobiliser connaissances, méthodes et outils dans une situation professionnelle."
      },
      {
        "term": "Preuve transversale",
        "detail": "Élément qui démontre plusieurs compétences, par exemple un test de restauration documenté."
      },
      {
        "term": "Synthèse orale",
        "detail": "Conclusion courte qui rappelle le problème, la réponse, la valeur et les limites."
      },
      {
        "term": "Démontré vs cible",
        "detail": "Distinction entre un résultat effectivement validé et une évolution planifiée."
      }
    ],
    "competencies": [
      {
        "code": "CP1",
        "label": "Appliquer les bonnes pratiques dans l’administration des infrastructures"
      },
      {
        "code": "CP2",
        "label": "Administrer et sécuriser les infrastructures réseaux"
      },
      {
        "code": "CP3",
        "label": "Administrer et sécuriser les infrastructures systèmes"
      },
      {
        "code": "CP4",
        "label": "Administrer et sécuriser les infrastructures virtualisées"
      },
      {
        "code": "CP5",
        "label": "Concevoir une solution technique répondant à des besoins d’évolution de l’infrastructure"
      },
      {
        "code": "CP6",
        "label": "Mettre en production des évolutions de l’infrastructure"
      },
      {
        "code": "CP7",
        "label": "Mettre en œuvre et optimiser la supervision des infrastructures"
      },
      {
        "code": "CP8",
        "label": "Participer à la mesure et à l’analyse du niveau de sécurité de l’infrastructure"
      },
      {
        "code": "CP9",
        "label": "Participer à l’élaboration et à la mise en œuvre de la politique de sécurité"
      },
      {
        "code": "CP10",
        "label": "Participer à la détection et au traitement des incidents de sécurité"
      }
    ],
    "traps": [
      "La slide de synthèse ne remplace pas les preuves montrées dans le reste du dossier.",
      "Ne termine pas sur une nouvelle information technique : ferme le raisonnement et rends la parole au jury."
    ],
    "transition": "À 39:10, passe de la slide 29 à la slide 30 : « Pour conclure, DataForge Industries m’a permis de travailler de bout en bout comme un administrateur d’infrastructures sécurisées. »"
  }
];
window.DATAFORGE_MINUTE_CARDS = minuteCards;
