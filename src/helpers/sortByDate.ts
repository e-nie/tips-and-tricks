import { ITipModel } from '../types/TipModel';
// Хелпер функция для сортировки дат.
export const sortByDate = (a: ITipModel, b: ITipModel) => {
    return new Date(b.created).getTime() - new Date(a.created).getTime();
};
