import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateSalesTable1708252692056 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE sales MODIFY COLUMN phoneNumber varchar(255)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE sales MODIFY COLUMN phoneNumber int`);
  }
}
