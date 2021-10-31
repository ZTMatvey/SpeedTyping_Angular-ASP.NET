using Microsoft.EntityFrameworkCore.Migrations;

namespace SpeedTyping.Migrations
{
    public partial class AddedForeignKeyToTextTypesInfo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_TextWriteTypes_TextWriteTypesInfoId",
                table: "AspNetUsers");

            migrationBuilder.AlterColumn<int>(
                name: "TextWriteTypesInfoId",
                table: "AspNetUsers",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d4dad604-45e4-4ee7-b7b1-697bf7a623b2",
                column: "ConcurrencyStamp",
                value: "12a9882d-b303-4837-b879-b23c4365a049");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "dc086066-451d-4cb1-a1ad-933352eb82b4",
                column: "ConcurrencyStamp",
                value: "fecb613a-37ab-4368-845b-509d7c9db1a4");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "215eedc8-7e86-46f6-88dc-6b052c4ed7b0",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "TextWriteTypesInfoId" },
                values: new object[] { "979ffff9-2573-4f62-9296-6e4d2b930fc6", "AQAAAAEAACcQAAAAEF2wrL6lH3IJ1FXS48CVmy0ILs/PcNqFJLDiTLVX0rNrttMh4cNNyViOTGNPLbB7nw==", 0 });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "f294e833-15e9-4066-8b41-61847ff6f0f7",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "TextWriteTypesInfoId" },
                values: new object[] { "6429d67a-062f-4960-808b-3366e82e915f", "AQAAAAEAACcQAAAAEJC1dfSaVs2F7B3D0v8NONvpvrWJ1N9gspVC+DaR7k8mVZBIqBg4QHOWNHeH3lff8A==", 0 });

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_TextWriteTypes_TextWriteTypesInfoId",
                table: "AspNetUsers",
                column: "TextWriteTypesInfoId",
                principalTable: "TextWriteTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_TextWriteTypes_TextWriteTypesInfoId",
                table: "AspNetUsers");

            migrationBuilder.AlterColumn<int>(
                name: "TextWriteTypesInfoId",
                table: "AspNetUsers",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d4dad604-45e4-4ee7-b7b1-697bf7a623b2",
                column: "ConcurrencyStamp",
                value: "e23675e2-cf17-4bcc-97ce-f122c7665352");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "dc086066-451d-4cb1-a1ad-933352eb82b4",
                column: "ConcurrencyStamp",
                value: "a4f070e7-5e5c-49e4-a748-0652ae359f86");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "215eedc8-7e86-46f6-88dc-6b052c4ed7b0",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "TextWriteTypesInfoId" },
                values: new object[] { "b2e58420-4c20-4fb5-9232-c29a21b043ce", "AQAAAAEAACcQAAAAEEe9F3mqEdli4o1JZVt4jYkzYVZD8BtYyBIGjWLt4NhrrlB4JqHXEnxtqyWsUM31WA==", null });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "f294e833-15e9-4066-8b41-61847ff6f0f7",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "TextWriteTypesInfoId" },
                values: new object[] { "3530a853-15a2-4719-a727-a1521d5fdb06", "AQAAAAEAACcQAAAAEJa7jw5Biibj5aUWtqqjnvMf/zlvbVx41SnYJ12g4+ZpflYD0k42Qdmtzdwd+3GiKQ==", null });

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_TextWriteTypes_TextWriteTypesInfoId",
                table: "AspNetUsers",
                column: "TextWriteTypesInfoId",
                principalTable: "TextWriteTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
