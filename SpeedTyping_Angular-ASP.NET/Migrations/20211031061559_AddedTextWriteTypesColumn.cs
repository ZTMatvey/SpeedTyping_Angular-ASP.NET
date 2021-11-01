using Microsoft.EntityFrameworkCore.Migrations;

namespace SpeedTyping.Migrations
{
    public partial class AddedTextWriteTypesColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TextWriteType_AspNetUsers_ApplicationUserId",
                table: "TextWriteType");

            migrationBuilder.DropIndex(
                name: "IX_TextWriteType_ApplicationUserId",
                table: "TextWriteType");

            migrationBuilder.DropColumn(
                name: "ApplicationUserId",
                table: "TextWriteType");

            migrationBuilder.DropColumn(
                name: "TypesInfoId",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<int>(
                name: "TextWriteTypeInfosId",
                table: "TextWriteType",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "TextWriteTypesInfoId",
                table: "AspNetUsers",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "TextWriteTypes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TextWriteTypes", x => x.Id);
                });

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
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "b2e58420-4c20-4fb5-9232-c29a21b043ce", "AQAAAAEAACcQAAAAEEe9F3mqEdli4o1JZVt4jYkzYVZD8BtYyBIGjWLt4NhrrlB4JqHXEnxtqyWsUM31WA==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "f294e833-15e9-4066-8b41-61847ff6f0f7",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "3530a853-15a2-4719-a727-a1521d5fdb06", "AQAAAAEAACcQAAAAEJa7jw5Biibj5aUWtqqjnvMf/zlvbVx41SnYJ12g4+ZpflYD0k42Qdmtzdwd+3GiKQ==" });

            migrationBuilder.CreateIndex(
                name: "IX_TextWriteType_TextWriteTypeInfosId",
                table: "TextWriteType",
                column: "TextWriteTypeInfosId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_TextWriteTypesInfoId",
                table: "AspNetUsers",
                column: "TextWriteTypesInfoId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_TextWriteTypes_TextWriteTypesInfoId",
                table: "AspNetUsers",
                column: "TextWriteTypesInfoId",
                principalTable: "TextWriteTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_TextWriteType_TextWriteTypes_TextWriteTypeInfosId",
                table: "TextWriteType",
                column: "TextWriteTypeInfosId",
                principalTable: "TextWriteTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_TextWriteTypes_TextWriteTypesInfoId",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_TextWriteType_TextWriteTypes_TextWriteTypeInfosId",
                table: "TextWriteType");

            migrationBuilder.DropTable(
                name: "TextWriteTypes");

            migrationBuilder.DropIndex(
                name: "IX_TextWriteType_TextWriteTypeInfosId",
                table: "TextWriteType");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_TextWriteTypesInfoId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "TextWriteTypeInfosId",
                table: "TextWriteType");

            migrationBuilder.DropColumn(
                name: "TextWriteTypesInfoId",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<string>(
                name: "ApplicationUserId",
                table: "TextWriteType",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "TypesInfoId",
                table: "AspNetUsers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d4dad604-45e4-4ee7-b7b1-697bf7a623b2",
                column: "ConcurrencyStamp",
                value: "29bfce7d-9201-4400-b634-4d6fd60a6695");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "dc086066-451d-4cb1-a1ad-933352eb82b4",
                column: "ConcurrencyStamp",
                value: "c23c6539-61cf-4c01-9a1a-613907b27520");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "215eedc8-7e86-46f6-88dc-6b052c4ed7b0",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "8cbfcf11-7120-44ba-8a75-7064795253d6", "AQAAAAEAACcQAAAAEHhDJvoZDAU7azdTHSo4RPocwN5hQ/KgJNqpvCI/speIHVujl1LzQ9+8Z0zFVFm5Ww==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "f294e833-15e9-4066-8b41-61847ff6f0f7",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "173c369f-8390-4dbc-b4b0-59d41c722a10", "AQAAAAEAACcQAAAAEN1W5lQRd58lLBBspQIv1hfSHqj7naVUQQxzeMGB5kiSi7iExxRXsHTF5Zs9YGxYQg==" });

            migrationBuilder.CreateIndex(
                name: "IX_TextWriteType_ApplicationUserId",
                table: "TextWriteType",
                column: "ApplicationUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_TextWriteType_AspNetUsers_ApplicationUserId",
                table: "TextWriteType",
                column: "ApplicationUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
