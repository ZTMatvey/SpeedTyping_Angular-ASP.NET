using Microsoft.EntityFrameworkCore.Migrations;

namespace SpeedTyping.Migrations
{
    public partial class AddedCountOfAllCharsToTextWriteInfo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CountOfAllChars",
                table: "TextWriteTypeInfos",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d4dad604-45e4-4ee7-b7b1-697bf7a623b2",
                column: "ConcurrencyStamp",
                value: "8eb34cae-d31e-4eb4-8cf4-95062b33204b");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "dc086066-451d-4cb1-a1ad-933352eb82b4",
                column: "ConcurrencyStamp",
                value: "f2198c48-5fc1-430e-91b1-f8ac53efd2d1");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "215eedc8-7e86-46f6-88dc-6b052c4ed7b0",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "a33c8a43-c0a1-412b-9a92-aeda636fcd78", "AQAAAAEAACcQAAAAEGfBSNoSvkpMtJE+qQiiwi/rlOcDtDXw4PG6ZD185n8FvpEQm18uC8lK2/IFY9spUw==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "f294e833-15e9-4066-8b41-61847ff6f0f7",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "a6796a1f-ae8f-4463-9581-90252284c07e", "AQAAAAEAACcQAAAAEC0vomtKopl3P4Pl2aZJ9XkOGOXUszw7MDNwmkOCOrUpzIA0tAN2Q9IIhv5pmxadFQ==" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CountOfAllChars",
                table: "TextWriteTypeInfos");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d4dad604-45e4-4ee7-b7b1-697bf7a623b2",
                column: "ConcurrencyStamp",
                value: "b48e206d-1b12-4dc4-8683-d504de3282fa");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "dc086066-451d-4cb1-a1ad-933352eb82b4",
                column: "ConcurrencyStamp",
                value: "23bb4c3a-8ece-4569-87bf-86119b89b149");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "215eedc8-7e86-46f6-88dc-6b052c4ed7b0",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "20ba4b67-44bd-4928-ac05-2e25963dc52b", "AQAAAAEAACcQAAAAEPqCZXGKsTzVQKU2IHMRCuSsWVSpE274a8rk8ghPWKE4tNnH3cd1KAYF+7VOcpXc9Q==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "f294e833-15e9-4066-8b41-61847ff6f0f7",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "bd0d419b-cc6e-4bc1-8c51-e4ff4f096707", "AQAAAAEAACcQAAAAEOBgYO62yP+kKQC2OaHRx53HoMerfBAG9JRUwUzHhl7eT9ANdhodllZdTs1SmI3YcQ==" });
        }
    }
}
