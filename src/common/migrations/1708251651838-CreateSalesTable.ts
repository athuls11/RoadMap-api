import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSalesTable1708251651838 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'sales',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'billNo',
            type: 'varchar',
          },
          {
            name: 'billDate',
            type: 'date',
          },
          {
            name: 'ewayBillNumber',
            type: 'varchar',
          },
          {
            name: 'deliveryDate',
            type: 'date',
          },
          {
            name: 'customerName',
            type: 'varchar',
          },
          {
            name: 'phoneNumber',
            type: 'int',
          },
          {
            name: 'address',
            type: 'varchar',
          },
          {
            name: 'deliveryAddress',
            type: 'varchar',
          },
          {
            name: 'transactionMode',
            type: 'varchar',
          },
          {
            name: 'isGst',
            type: 'boolean',
          },
          {
            name: 'code',
            type: 'varchar',
          },
          {
            name: 'itemName',
            type: 'varchar',
          },
          {
            name: 'batchCode',
            type: 'varchar',
          },
          {
            name: 'qty',
            type: 'int',
          },
          {
            name: 'unitPrice',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'mrp',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'taxValue',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'gstPercentage',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'gstAmt',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'total',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'staff',
            type: 'varchar',
          },
          {
            name: 'note',
            type: 'varchar',
          },
          {
            name: 'vehicleNumber',
            type: 'varchar',
          },
          {
            name: 'deliveryCharge',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'totalTaxableAmount',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'outstanding',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'discount',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'gstAmount',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'paymentMode',
            type: 'varchar',
          },
          {
            name: 'amount',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'roundOff',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'grandTotal',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('sales');
  }
}
