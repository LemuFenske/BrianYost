const plans = [
  {
    id: 1,
    name: "Premium",
    duration: "Por mes",
    features: [
      { id: 1, description: "Plan de entrenamiento", included: true },
      { id: 2, description: "Análisis de hábitos alimenticios", included: true },
      { id: 3, description: "Guía de nutrición", included: true },
      { id: 4, description: "Revision de entrenamientos previos", included: true },
      { id: 4, description: "Profesionales en análisis de datos", included: true },
      { id: 6, description: "Revisión del plan cada 21 días", included: true },
      { id: 7, description: "Soporte prioritario via WhatsApp", included: true },
      { id: 8, description: "Cambios progresivos en hábitos", included: true },
      { id: 9, description: "Pérdida de peso/Ganancia muscular", included: true },
      { id: 10, description: "Identificación de objetivos", included: true },
    ],
    price: "$40",
    description: 'En primer lugar analizaremos hábitos alimenticios y modo de entrenamiento. En base a eso vamos apuntando hacia el objetivo que nos propongamos, sea perder grasa, ganar masa muscular, mejorar el estado de salud,  entre otros, según lo que el alumno/a desee lograr. Trabajaremos en equipo con profesionales en el análisis de datos, tales como masa corporal, índice de grasa, entre otros. Con el fin de valorar las reservas de que dispone el cuerpo y establecer qué niveles se deben modificar. Revisión y modificación quincenal o mensual de la rutina de entrenamiento y la dieta. Con soporte 24/7 via WhatsApp para despejar cualquier duda que pueda surgir. La idea es ir poco a poco, cambiando hábitos de manera progresiva hasta llegar al objetivo.'
  },
  {
    id: 2,
    name: "Básico",
    duration: "Por mes",
    features: [
      { id: 11, description: "Plan de entrenamiento", included: true },
      { id: 12, description: "Análisis de hábitos alimenticios", included: false },
      { id: 13, description: "Guía de nutrición", included: true },
      { id: 14, description: "Revision de entrenamientos previos", included: false },
      { id: 15, description: "Equipo de profesionales en análisis de datos", included: false },
      { id: 16, description: "Revisión del plan cada 45 días", included: true },
      { id: 17, description: "Soporte via WhatsApp", included: true },
      { id: 18, description: "Cambios progresivos en hábitos", included: true },
      { id: 19, description: "Pérdida de peso/Ganancia muscular", included: true },
      { id: 20, description: "Identificación de objetivos", included: true },
    ],
    price: "$25",
    description: 'En primer lugar identificaremos los objetivos que la alumno desee lograr, luego planificaremos una rutina de entrenamiento, dieta y suplementacion (de ser necesario), acorde a los mismos que se revisará y modificará cada 45 días. Con soporte 24/7 via WhatsApp para despejar cualquier duda que pueda surgir.'
  },
  {
    id: 3,
    name: "Simple",
    duration: "Única vez",
    features: [
      { id: 21, description: "Plan de entrenamiento", included: true },
      { id: 22, description: "Análisis de hábitos alimenticios", included: false },
      { id: 23, description: "Guía de nutrición", included: true },
      { id: 24, description: "Revision de entrenamientos previos", included: false },
      { id: 25, description: "Equipo de profesionales en análisis de datos", included: false },
      { id: 26, description: "Revisión del plan", included: false },
      { id: 27, description: "Soporte via WhatsApp", included: true },
      { id: 28, description: "Cambios progresivos en hábitos", included: true },
      { id: 29, description: "Pérdida de peso/Ganancia muscular", included: true },
      { id: 30, description: "Identificación de objetivos", included: true },
    ],
    price: "$15",
    description: 'Se ofrece un completo y personalizado programa que incluye un plan de entrenamiento, guía de nutrición, soporte vía WhatsApp, cambios progresivos en hábitos, identificación de objetivos, y enfoque en pérdida de peso y ganancia muscular.'
  },
];

  
// const plans = [
//   {
//     id: 1,
//     name: "Principiante",
//     duration: "4 semanas",
//     features: [
//       { id: 1, description: "Plan de entrenamiento", included: true },
//       { id: 2, description: "Plan de 4 semanas", included: true },
//       { id: 3, description: "Acceso a videos de ejercicios", included: true },
//       { id: 4, description: "Asesoramiento por expertos", included: true },
//       { id: 5, description: "Seguimiento de progreso", included: false },
//       { id: 6, description: "Acceso a comunidad en línea", included: true },
//       { id: 7, description: "Sesiones en vivo", included: false },
//       { id: 8, description: "Evaluación de la forma física", included: false },
//       { id: 9, description: "Rutinas de calentamiento", included: false },
//       { id: 10, description: "Guía de nutrición", included: false },
//     ],
//     price: "$29",
//   },
//   {
//     id: 2,
//     name: "Intermedio",
//     duration: "6 semanas",
//     features: [
//       { id: 11, description: "Plan de entrenamiento", included: true },
//       { id: 12, description: "Plan de 6 semanas", included: true },
//       { id: 13, description: "Acceso a videos de ejercicios", included: true },
//       { id: 14, description: "Asesoramiento por expertos", included: true },
//       { id: 15, description: "Seguimiento de progreso", included: true },
//       { id: 16, description: "Acceso a comunidad en línea", included: true },
//       { id: 17, description: "Sesiones en vivo", included: false },
//       { id: 18, description: "Evaluación de la forma física", included: false },
//       { id: 19, description: "Rutinas de calentamiento", included: true },
//       { id: 20, description: "Guía de nutrición", included: false },
//     ],
//     price: "$49",
//   },
//   {
//     id: 3,
//     name: "Avanzado",
//     duration: "8 semanas",
//     features: [
//       { id: 21, description: "Plan de entrenamiento", included: true },
//       { id: 22, description: "Plan de 8 semanas", included: true },
//       { id: 23, description: "Acceso a videos de ejercicios", included: true },
//       { id: 24, description: "Asesoramiento por expertos", included: true },
//       { id: 25, description: "Seguimiento de progreso", included: true },
//       { id: 26, description: "Acceso a comunidad en línea", included: true },
//       { id: 27, description: "Sesiones en vivo", included: true },
//       { id: 28, description: "Evaluación de la forma física", included: true },
//       { id: 29, description: "Rutinas de calentamiento", included: true },
//       { id: 30, description: "Guía de nutrición", included: true },
//     ],
//     price: "$69",
//   },
// ];
  
export default plans;