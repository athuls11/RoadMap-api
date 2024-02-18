import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Sales {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  billNo: string;

  @Column({ type: 'date' })
  billDate: Date;

  @Column()
  ewayBillNumber: string;

  @Column({ type: 'date' })
  deliveryDate: Date;

  @Column()
  customerName: string;

  @Column()
  phoneNumber: string;

  @Column()
  address: string;

  @Column()
  deliveryAddress: string;

  @Column()
  transactionMode: string;

  @Column()
  isGst: boolean;

  @Column()
  code: string;

  @Column()
  itemName: string;

  @Column()
  batchCode: string;

  @Column()
  qty: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  unitPrice: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  mrp: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  taxValue: number;

  @Column()
  gstPercentage: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  gstAmt: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total: number;

  @Column()
  staff: string;

  @Column()
  note: string;

  @Column()
  vehicleNumber: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  deliveryCharge: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  totalTaxableAmount: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  outstanding: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  discount: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  gstAmount: number;

  @Column()
  paymentMode: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column()
  roundOff: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  grandTotal: number;
}
