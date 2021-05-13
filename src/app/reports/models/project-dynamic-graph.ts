import { Alias, Model } from 'tsmodels';

export class ProjectDynamicGraph extends Model {
  @Alias() public id: number;
  @Alias() public name: string;
  @Alias() public worked: number[];
  @Alias() public paid: number[];
  @Alias('worked_sum') public workedSum: number;
  @Alias('paid_sum') public paidSum: number;
  @Alias() public show: boolean;
}
