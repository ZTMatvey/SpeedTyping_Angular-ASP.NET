using Microsoft.EntityFrameworkCore.Migrations;

namespace SpeedTyping.Migrations
{
    public partial class AddedCPM : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CPM",
                table: "TextWriteTypeInfos",
                type: "int",
                nullable: false,
                defaultValue: 0);

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CPM",
                table: "TextWriteTypeInfos");

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
    }
}
