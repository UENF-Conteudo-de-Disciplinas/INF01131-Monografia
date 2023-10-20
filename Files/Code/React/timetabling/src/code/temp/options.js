const options = {
  category: [
    { value: "Obrigatória", label: "Obrigatória" },
    { value: "Eletiva optativa", label: "Eletiva optativa" },
    { value: "Eletiva Livre", label: "Eletiva Livre" },
  ],
  CRUD: {
    main: {
      label: "Main",
      value: "main",
      component: "",
      url_path: "/",
      file_path: "/pages/mainpage",
    },
    crud_salas: {
      label: "Salas",
      value: "salas",
      component: "",
      url_path: "/CRUD/salas",
      file_path: "/pages/CRUD_rooms",
    },
    crud: {
      label: "Main CRUD",
      value: "Main CRUD",
      component: "",
      url_path: "/CRUD",
      file_path: "/pages/CRUD_main",
    },
    crud_turmas: {
      label: "Turmas",
      value: "turmas",
      component: "",
      url_path: "/CRUD/turmas",
      file_path: "/pages/CRUD_class",
    },
    crud_professores: {
      label: "Professores",
      value: "docentes",
      component: "",
      url_path: "/CRUD/professores",
      file_path: "/pages/CRUD_professors",
    },
    crud_alunos: {
      label: "Alunos",
      value: "discentes",
      component: "",
      url_path: "/CRUD/alunos",
      file_path: "/pages/CRUD_students",
    },
    crud_disciplinas: {
      label: "Disciplinas",
      value: "disciplinas",
      component: "",
      url_path: "/CRUD/disciplinas",
      file_path: "/pages/CRUD_disciplinas",
    },
    not_found: {
      label: "Not Found",
      value: "notFound",
      component: "",
      url_path: "/not_found",
      file_path: "/pages/NoPage",
    },
  },
  CRUD_list: [
    {
      label: "Main",
      value: "main",
      component: "",
      url_path: "/",
      file_path: "/pages/mainpage",
    },
    {
      label: "Salas",
      value: "salas",
      component: "",
      url_path: "/CRUD/salas",
      file_path: "/pages/CRUD_rooms",
    },
    {
      label: "Main CRUD",
      value: "Main CRUD",
      component: "",
      url_path: "/CRUD",
      file_path: "/pages/CRUD_main",
    },
    {
      label: "Turmas",
      value: "turmas",
      component: "",
      url_path: "/CRUD/turmas",
      file_path: "/pages/CRUD_class",
    },
    {
      label: "Professores",
      value: "docentes",
      component: "",
      url_path: "/CRUD/professores",
      file_path: "/pages/CRUD_professors",
    },
    {
      label: "Alunos",
      value: "discentes",
      component: "",
      url_path: "/CRUD/alunos",
      file_path: "/pages/CRUD_students",
    },
    {
      label: "Disciplinas",
      value: "disciplinas",
      component: "",
      url_path: "/CRUD/disciplinas",
      file_path: "/pages/CRUD_disciplinas",
    },
    {
      label: "Not Found",
      value: "notFound",
      component: "",
      url_path: "/not_found",
      file_path: "/pages/NoPage",
    },
  ],
  courses: [
    { label: "Ciência da Computação", value: "Ciência da Computação" },
    { label: "Engenharia Civil", value: "Engenharia Civil" },
    {
      label: "Engenharia de Exploração e Produção de Petróleo",
      value: "Engenharia de Exploração e Produção de Petróleo",
    },
    { label: "Engenharia de Produção", value: "Engenharia de Produção" },
    {
      label: "Engenharia Metalúrgica e de Materiais",
      value: "Engenharia Metalúrgica e de Materiais",
    },
    { label: "Engenharia Meteorológica", value: "Engenharia Meteorológica" },
    { label: "Licenciatura em Física", value: "Licenciatura em Física" },
    {
      label: "Licenciatura em Matemática",
      value: "Licenciatura em Matemática",
    },
    { label: "Licenciatura em Química", value: "Licenciatura em Química" },
    {
      label: "Licenciatura em Química à Distância",
      value: "Licenciatura em Química à Distância",
    },
  ],
  days: [
    { label: "SEG", value: "SEG" },
    { label: "TER", value: "TER" },
    { label: "QUA", value: "QUA" },
    { label: "QUI", value: "QUI" },
    { label: "SEX", value: "SEX" },
  ],
  expectedSemester: [
    { label: "0", value: "0" },
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "10", value: "10" },
  ],
  professors: [
    { label: "Annabell", value: "Annabell" },
    { label: "Elba", value: "Elba" },
    { label: "Oscar", value: "Oscar" },
    { label: "Rigoberto", value: "Rigoberto" },
    { label: "Tang", value: "Tang" },
  ],
  roomCodes: [
    { label: "P5", value: "105" },
    { label: "CCT", value: "106-A" },
    { label: "P5", value: "106-B" },
    { label: "P5", value: "107" },
    { label: "CCTA", value: "109" },
  ],
  roomProps: [
    { label: "Monitor", value: "monitor" },
    { label: "Projetor", value: "projetor" },
    { label: "Piloto", value: "quadro branco" },
    { label: "Giz", value: "quadro de giz" },
  ],
  semesters: [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "Verão", value: "Verão" },
  ],
  students: [
    { value: "00119110001", label: "Abacate de Souza" },
    { value: "00119110002", label: "Beterrabinha Ferreira Silva" },
    { value: "00119110003", label: "Cenourinha da Graça Pinheiro" },
    { value: "00119110004", label: "Damasco Figueiredo das Neves" },
    { value: "00119110005", label: "Elefante Silva" },
    { value: "00119110006", label: "Feliz Augusto Degel" },
    { value: "00119110007", label: "Gato Menezes Oliveira" },
    { value: "00119110008", label: "Helicóptero Dias Ribeiro" },
  ],
  subjectCodeName: [
    { value: "INF00001", label: "Calc 1" },
    { value: "INF00002", label: "Calc 2" },
    { value: "FIS00001", label: "Calc 3" },
    { value: "FIS00002", label: "Algebra Linear" },
    { value: "MAT00001", label: "Geometria Analítica" },
  ],
  years: [
    { value: "2014", label: "2014" },
    { value: "2015", label: "2015" },
    { value: "2016", label: "2016" },
    { value: "2017", label: "2017" },
    { value: "2018", label: "2018" },
    { value: "2019", label: "2019" },
    { value: "2020", label: "2020" },
    { value: "2021", label: "2021" },
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
    { value: "2024", label: "2024" },
  ],
};

export default options;
