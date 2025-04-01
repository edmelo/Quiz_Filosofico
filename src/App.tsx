import React, { useState, useEffect } from 'react';
import { Scroll, Brain, GraduationCap, Book, Heart } from 'lucide-react';

interface Question {
  id: number;
  theme: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    theme: "O sentido da filosofia da educação",
    question: "Qual é o principal objetivo da Filosofia da Educação?",
    options: [
      "Apenas transmitir conhecimentos técnicos",
      "Refletir criticamente sobre os fundamentos e fins da educação",
      "Memorizar teorias filosóficas",
      "Ignorar questões práticas do ensino"
    ],
    correctAnswer: 1,
    explanation: "A Filosofia da Educação busca refletir criticamente sobre os fundamentos, métodos e objetivos da educação, questionando suas práticas e propósitos."
  },
  {
    id: 2,
    theme: "A origem do pensamento ocidental",
    question: "O que caracteriza o início do pensamento filosófico ocidental?",
    options: [
      "A busca por explicações míticas",
      "A procura por explicações racionais para os fenômenos",
      "A rejeição total do conhecimento",
      "A aceitação passiva da realidade"
    ],
    correctAnswer: 1,
    explanation: "O pensamento filosófico ocidental se caracteriza pela busca de explicações racionais, superando as explicações puramente míticas."
  },
  {
    id: 3,
    theme: "A contribuição de Sócrates e Platão",
    question: "Qual é o método principal de ensino desenvolvido por Sócrates?",
    options: [
      "Aulas expositivas",
      "Maiêutica - diálogo e questionamento",
      "Memorização de textos",
      "Exercícios escritos"
    ],
    correctAnswer: 1,
    explanation: "Sócrates desenvolveu o método maiêutico, baseado no diálogo e questionamento, ajudando os alunos a 'darem à luz' seu próprio conhecimento."
  },
  {
    id: 4,
    theme: "A questão do conhecimento para Aristóteles",
    question: "Como Aristóteles entendia o processo de conhecimento?",
    options: [
      "Como algo puramente teórico",
      "Como uma combinação de experiência sensível e razão",
      "Como pura contemplação",
      "Como memorização de fatos"
    ],
    correctAnswer: 1,
    explanation: "Aristóteles via o conhecimento como um processo que combina a experiência sensível com o raciocínio lógico."
  },
  {
    id: 5,
    theme: "Questões éticas e formação de professores",
    question: "Qual é a importância da ética na formação docente?",
    options: [
      "Apenas cumprir regras escolares",
      "Desenvolver responsabilidade moral e compromisso com a formação integral",
      "Manter a disciplina em sala",
      "Seguir o currículo estabelecido"
    ],
    correctAnswer: 1,
    explanation: "A ética na formação docente é fundamental para desenvolver um compromisso com a formação integral dos alunos e a responsabilidade moral do educador."
  },
  {
    id: 6,
    theme: "O sentido da filosofia da educação",
    question: "Como a Filosofia da Educação contribui para a prática pedagógica?",
    options: [
      "Fornecendo receitas prontas de ensino",
      "Promovendo reflexão crítica sobre a prática educativa",
      "Substituindo métodos tradicionais",
      "Ignorando a realidade escolar"
    ],
    correctAnswer: 1,
    explanation: "A Filosofia da Educação contribui fornecendo ferramentas para reflexão crítica sobre a prática educativa, permitindo seu constante aperfeiçoamento."
  },
  {
    id: 7,
    theme: "A origem do pensamento ocidental",
    question: "Qual foi a principal contribuição dos pré-socráticos para a educação?",
    options: [
      "A criação de escolas formais",
      "A busca por explicações racionais e sistemáticas",
      "O desenvolvimento da escrita",
      "O estabelecimento do currículo escolar"
    ],
    correctAnswer: 1,
    explanation: "Os pré-socráticos contribuíram principalmente com a introdução do pensamento racional e sistemático na busca pelo conhecimento."
  },
  {
    id: 8,
    theme: "A contribuição de Sócrates e Platão",
    question: "O que é a teoria das ideias de Platão?",
    options: [
      "Um método de memorização",
      "Uma teoria sobre o mundo das ideias perfeitas e eternas",
      "Um sistema de avaliação",
      "Uma técnica de ensino"
    ],
    correctAnswer: 1,
    explanation: "A teoria das ideias de Platão propõe a existência de um mundo das ideias perfeitas e eternas, do qual o mundo material é apenas uma cópia imperfeita."
  },
  {
    id: 9,
    theme: "A questão do conhecimento para Aristóteles",
    question: "Qual é a visão de Aristóteles sobre a virtude?",
    options: [
      "Algo inato ao ser humano",
      "Um hábito que se desenvolve pela prática",
      "Um dom divino",
      "Uma característica hereditária"
    ],
    correctAnswer: 1,
    explanation: "Aristóteles via a virtude como um hábito que se desenvolve através da prática constante e do exercício da razão."
  },
  {
    id: 10,
    theme: "Questões éticas e formação de professores",
    question: "Qual deve ser o papel do professor segundo a filosofia da educação?",
    options: [
      "Apenas transmitir conteúdo",
      "Ser um mediador do conhecimento e formador integral",
      "Manter a ordem em sala",
      "Seguir o livro didático"
    ],
    correctAnswer: 1,
    explanation: "O professor deve ser um mediador do conhecimento, contribuindo para a formação integral dos alunos, não apenas transmitindo conteúdo."
  },
  {
    id: 11,
    theme: "O sentido da filosofia da educação",
    question: "Qual é a relação entre filosofia e prática educativa?",
    options: [
      "São áreas totalmente separadas",
      "A filosofia fundamenta e orienta a prática educativa",
      "A filosofia substitui a prática",
      "Não há relação entre elas"
    ],
    correctAnswer: 1,
    explanation: "A filosofia fornece fundamentos teóricos e reflexivos que orientam e dão sentido à prática educativa."
  },
  {
    id: 12,
    theme: "A origem do pensamento ocidental",
    question: "Como os sofistas contribuíram para a educação?",
    options: [
      "Não tiveram importância",
      "Desenvolveram o ensino da retórica e da argumentação",
      "Apenas cobravam pelos serviços",
      "Prejudicaram a educação"
    ],
    correctAnswer: 1,
    explanation: "Os sofistas contribuíram significativamente ao desenvolver o ensino da retórica e da argumentação, importantes para a formação cidadã."
  },
  {
    id: 13,
    theme: "A contribuição de Sócrates e Platão",
    question: "O que é a alegoria da caverna de Platão?",
    options: [
      "Uma história de aventura",
      "Uma metáfora sobre o processo de conhecimento e libertação da ignorância",
      "Um método de ensino matemático",
      "Uma lenda grega"
    ],
    correctAnswer: 1,
    explanation: "A alegoria da caverna é uma metáfora que representa o processo de libertação da ignorância e busca pelo verdadeiro conhecimento."
  },
  {
    id: 14,
    theme: "A questão do conhecimento para Aristóteles",
    question: "Como Aristóteles classificava os tipos de conhecimento?",
    options: [
      "Não havia classificação",
      "Em teórico, prático e produtivo",
      "Apenas em teórico e prático",
      "Em superior e inferior"
    ],
    correctAnswer: 1,
    explanation: "Aristóteles classificava o conhecimento em teórico (teoria), prático (ação) e produtivo (criação)."
  },
  {
    id: 15,
    theme: "Questões éticas e formação de professores",
    question: "Qual é a importância da reflexão filosófica na formação docente?",
    options: [
      "Não tem importância",
      "Desenvolve pensamento crítico e consciência ética",
      "Apenas para cumprir currículo",
      "Somente para teoria"
    ],
    correctAnswer: 1,
    explanation: "A reflexão filosófica é fundamental para desenvolver o pensamento crítico e a consciência ética necessários à prática docente."
  },
  {
    id: 16,
    theme: "O sentido da filosofia da educação",
    question: "Qual é o papel da filosofia da educação na formação do currículo?",
    options: [
      "Nenhum papel",
      "Fundamentar as escolhas e orientações curriculares",
      "Apenas burocratic",
      "Dificultar o processo"
    ],
    correctAnswer: 1,
    explanation: "A filosofia da educação fundamenta as escolhas curriculares, dando-lhes sentido e direção conforme os objetivos educacionais."
  },
  {
    id: 17,
    theme: "A origem do pensamento ocidental",
    question: "Qual foi a importância da Academia de Platão?",
    options: [
      "Era apenas um local de reunião",
      "Foi a primeira instituição de ensino superior do ocidente",
      "Não teve importância",
      "Era um centro esportivo"
    ],
    correctAnswer: 1,
    explanation: "A Academia de Platão foi a primeira instituição de ensino superior do ocidente, influenciando o modelo de educação superior até hoje."
  },
  {
    id: 18,
    theme: "A contribuição de Sócrates e Platão",
    question: "Como Sócrates via o papel do professor?",
    options: [
      "Como autoridade absoluta",
      "Como um facilitador do autoconhecimento",
      "Como transmissor de conteúdo",
      "Como disciplinador"
    ],
    correctAnswer: 1,
    explanation: "Sócrates via o professor como um facilitador que ajuda o aluno a descobrir o conhecimento que já possui dentro de si."
  },
  {
    id: 19,
    theme: "A questão do conhecimento para Aristóteles",
    question: "O que é a teoria do ato e potência de Aristóteles?",
    options: [
      "Uma teoria física",
      "Uma explicação sobre o processo de desenvolvimento e aprendizagem",
      "Uma teoria matemática",
      "Um método de ensino"
    ],
    correctAnswer: 1,
    explanation: "A teoria do ato e potência explica como os seres se desenvolvem, passando da potência (possibilidade) ao ato (realização)."
  },
  {
    id: 20,
    theme: "Questões éticas e formação de professores",
    question: "Como a ética influencia as decisões pedagógicas?",
    options: [
      "Não influencia",
      "Orienta as escolhas e ações do professor visando o bem dos alunos",
      "Apenas nas regras disciplinares",
      "Somente na avaliação"
    ],
    correctAnswer: 1,
    explanation: "A ética orienta as decisões pedagógicas do professor, garantindo que suas escolhas e ações visem o bem e o desenvolvimento dos alunos."
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [randomizedQuestions, setRandomizedQuestions] = useState<Question[]>([]);

  useEffect(() => {
    // Shuffle questions at the start of the game
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setRandomizedQuestions(shuffled);
  }, []);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    if (answerIndex === randomizedQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setShowExplanation(false);
    setSelectedAnswer(null);
    if (currentQuestion < randomizedQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartGame = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setRandomizedQuestions(shuffled);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setShowExplanation(false);
    setSelectedAnswer(null);
  };

  const getThemeIcon = (theme: string) => {
    switch (theme) {
      case "O sentido da filosofia da educação":
        return <Scroll className="w-6 h-6" />;
      case "A origem do pensamento ocidental":
        return <Brain className="w-6 h-6" />;
      case "A contribuição de Sócrates e Platão":
        return <GraduationCap className="w-6 h-6" />;
      case "A questão do conhecimento para Aristóteles":
        return <Book className="w-6 h-6" />;
      default:
        return <Heart className="w-6 h-6" />;
    }
  };

  if (!randomizedQuestions.length) return null;

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full">
          <h2 className="text-3xl font-bold text-center mb-6">Jornada Filosófica Completa!</h2>
          <p className="text-xl text-center mb-4">
            Você acertou {score} de {randomizedQuestions.length} questões
          </p>
          <div className="flex justify-center">
            <button
              onClick={restartGame}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Recomeçar Jornada
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full">
        <div className="flex items-center gap-3 mb-6">
          {getThemeIcon(randomizedQuestions[currentQuestion].theme)}
          <h3 className="text-lg font-semibold text-gray-600">
            {randomizedQuestions[currentQuestion].theme}
          </h3>
        </div>
        
        <h2 className="text-2xl font-bold mb-6">
          {randomizedQuestions[currentQuestion].question}
        </h2>

        <div className="space-y-4">
          {randomizedQuestions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={showExplanation}
              className={`w-full p-4 text-left rounded-lg transition-colors ${
                showExplanation
                  ? index === randomizedQuestions[currentQuestion].correctAnswer
                    ? 'bg-green-100 border-2 border-green-500'
                    : index === selectedAnswer
                    ? 'bg-red-100 border-2 border-red-500'
                    : 'bg-gray-100'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {showExplanation && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-900">{randomizedQuestions[currentQuestion].explanation}</p>
            <button
              onClick={nextQuestion}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {currentQuestion < randomizedQuestions.length - 1 ? 'Próxima Questão' : 'Ver Resultado'}
            </button>
          </div>
        )}

        <div className="mt-6 flex justify-between items-center">
          <p className="text-gray-600">
            Questão {currentQuestion + 1} de {randomizedQuestions.length}
          </p>
          <p className="text-gray-600">
            Pontuação: {score}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;