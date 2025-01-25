import { CallData } from "./types";

export const appLabels: { [name: string]: string } = {
  title: "Менеджер звонков",
  login: "Логин",
  password: "Пароль",
  loginButton: "войти",
  logoutButton: "выйти",
  avatar: "Аватарка пользователя",
};

export const tableHeaderLabels: string[] = [
  "ФИО менеджера",
  "Количество звонков",
  "Количество пропущенных",
  "Средняя продолжительность звонков",
  "Дата звонка",
  "Номер телефона",
];

export const filterLabels: { [name: string]: string } = {
  managerName: "ФИО менеджера",
  dateFrom: "Дата звонка от",
  dateTo: "Дата звонка до",
};

export const mockData: CallData[] = [
  {
    managerName: "Иванов Иван Иванович",
    callCount: 45,
    missedCalls: 5,
    averageDuration: "3:45",
    callDate: "01.12.2024",
    phoneNumber: "+7 (925) 123-45-67",
  },
  {
    managerName: "Петрова Анна Сергеевна",
    callCount: 38,
    missedCalls: 2,
    averageDuration: "4:12",
    callDate: "11.12.2024",
    phoneNumber: "+7 (916) 234-56-78",
  },
  {
    managerName: "Сидоров Петр Михайлович",
    callCount: 52,
    missedCalls: 8,
    averageDuration: "2:58",
    callDate: "17.12.2024",
    phoneNumber: "+7 (903) 345-67-89",
  },
  {
    managerName: "Козлова Мария Александровна",
    callCount: 41,
    missedCalls: 3,
    averageDuration: "3:22",
    callDate: "03.01.2025",
    phoneNumber: "+7 (495) 456-78-90",
  },
  {
    managerName: "Николаев Андрей Петрович",
    callCount: 33,
    missedCalls: 4,
    averageDuration: "5:15",
    callDate: "08.01.2025",
    phoneNumber: "+7 (926) 567-89-01",
  },
  {
    managerName: "Морозова Елена Дмитриевна",
    callCount: 47,
    missedCalls: 6,
    averageDuration: "4:05",
    callDate: "11.01.2025",
    phoneNumber: "+7 (917) 678-90-12",
  },
  {
    managerName: "Кузнецов Дмитрий Сергеевич",
    callCount: 39,
    missedCalls: 1,
    averageDuration: "3:48",
    callDate: "14.01.2025",
    phoneNumber: "+7 (905) 789-01-23",
  },
  {
    managerName: "Соколова Ольга Владимировна",
    callCount: 44,
    missedCalls: 7,
    averageDuration: "4:33",
    callDate: "17.01.2025",
    phoneNumber: "+7 (499) 890-12-34",
  },
  {
    managerName: "Попов Александр Иванович",
    callCount: 36,
    missedCalls: 2,
    averageDuration: "3:17",
    callDate: "22.01.2025",
    phoneNumber: "+7 (915) 901-23-45",
  },
  {
    managerName: "Лебедева Наталья Андреевна",
    callCount: 50,
    missedCalls: 5,
    averageDuration: "4:55",
    callDate: "24.01.2025",
    phoneNumber: "+7 (929) 012-34-56",
  },
];

export const convertDateFormat = (date: string): Date => {
  const dateArr = date.split(".");
  return new Date(`${dateArr[1]}.${dateArr[0]}.${dateArr[2]}`);
};

// Решил применить каррирование для демонстрации
export const filterDate =
  (filtratedList: CallData[]) =>
  (filter: string) =>
  (direction?: "ASC" | "DESC") =>
    filtratedList.filter((item) =>
      direction === "ASC"
        ? convertDateFormat(item.callDate) >= convertDateFormat(filter!)
        : convertDateFormat(item.callDate) <= convertDateFormat(filter!)
    );
