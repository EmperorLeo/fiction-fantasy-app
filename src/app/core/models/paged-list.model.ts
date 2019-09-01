export class PagedList<T> {
  items: T[];
  pageNumber: number;
  pageSize: number;
  totalCount: number;
}