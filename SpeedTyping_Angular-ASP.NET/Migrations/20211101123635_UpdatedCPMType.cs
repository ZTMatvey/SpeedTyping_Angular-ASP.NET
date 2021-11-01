using Microsoft.EntityFrameworkCore.Migrations;

namespace SpeedTyping.Migrations
{
    public partial class UpdatedCPMType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<double>(
                name: "CPM",
                table: "TextWriteTypeInfos",
                type: "float",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d4dad604-45e4-4ee7-b7b1-697bf7a623b2",
                column: "ConcurrencyStamp",
                value: "b5fa20af-f1d4-4151-97ca-e09419622b66");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "dc086066-451d-4cb1-a1ad-933352eb82b4",
                column: "ConcurrencyStamp",
                value: "c5de5982-fe63-460b-9ea5-2f7ad4407258");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "215eedc8-7e86-46f6-88dc-6b052c4ed7b0",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "d49a074b-2faf-4c0f-a705-1651475961b1", "AQAAAAEAACcQAAAAEGeGt5d77/D8NzPIrSKnN6C1B1evE66aZCimyi9D3iLeD/yOjdfG0fYHtRAUDeN1Kw==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "f294e833-15e9-4066-8b41-61847ff6f0f7",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "4dff4e1d-6ea1-495e-b516-448c10a2996b", "AQAAAAEAACcQAAAAEOWT0k1n7jj1lDcyetDfJ7Z+GGJxSWuTqawf0H7red5dDF1qGpccht/kU3s4kBLjAg==" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "CPM",
                table: "TextWriteTypeInfos",
                type: "int",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "float");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d4dad604-45e4-4ee7-b7b1-697bf7a623b2",
                column: "ConcurrencyStamp",
                value: "4d8f8bb7-4b28-450c-8fcc-63c6a0a55e81");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "dc086066-451d-4cb1-a1ad-933352eb82b4",
                column: "ConcurrencyStamp",
                value: "6024bfa3-3c3f-44e3-a0c3-d582be4b3110");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "215eedc8-7e86-46f6-88dc-6b052c4ed7b0",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "8c49f380-8d85-4a19-8829-76319d8c7119", "AQAAAAEAACcQAAAAEDuj2iCGV2nuoKQC33+zLlFZNwxO7qhT2jg3t5wkgi4JTtK3CiQqY1L3kTJpiQ26Ug==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "f294e833-15e9-4066-8b41-61847ff6f0f7",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "3b32a21a-64f0-49ec-8a68-66441d38f8c0", "AQAAAAEAACcQAAAAEGXP4C92SjO+1neqrIIwVZ0NqXhMLUbALsScqaDMsfD+bvTrlI/CdSGgwDpNEZCn6Q==" });
        }
    }
}
