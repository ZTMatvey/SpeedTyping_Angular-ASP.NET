using Microsoft.EntityFrameworkCore.Migrations;

namespace SpeedTyping.Migrations
{
    public partial class AddedLanguageToText : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Language",
                table: "Texts",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d4dad604-45e4-4ee7-b7b1-697bf7a623b2",
                column: "ConcurrencyStamp",
                value: "4901fb69-fbf8-4c05-b228-67ab668b541c");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "dc086066-451d-4cb1-a1ad-933352eb82b4",
                column: "ConcurrencyStamp",
                value: "bb9e4639-99b9-49cc-88a5-df9158628f26");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "215eedc8-7e86-46f6-88dc-6b052c4ed7b0",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "1c707c71-00e2-4f6c-aa49-b1f9acb56867", "AQAAAAEAACcQAAAAEIjRxPnem59siuPyKdaKC9mul9iNjBdpmCrCvtLiRzuXVwPfN3XnAVS/TqotzXD4dw==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "f294e833-15e9-4066-8b41-61847ff6f0f7",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "9758830a-04e7-4fb3-96d6-9b17bc783cd2", "AQAAAAEAACcQAAAAEENZA10w05mUuLRdenzZaKVdaOJN7nOPA9eXFzC49TwjqKzburLDtHXRxB290S8JoQ==" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Language",
                table: "Texts");

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
    }
}
