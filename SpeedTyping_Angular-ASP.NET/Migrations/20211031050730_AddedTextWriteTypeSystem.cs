using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SpeedTyping.Migrations
{
    public partial class AddedTextWriteTypeSystem : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TextWriteTypeInfo");

            migrationBuilder.DropColumn(
                name: "FreeTypesInfoId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "NormalTypesInfoId",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<int>(
                name: "TypesInfoId",
                table: "AspNetUsers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "TextWriteType",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TypeInfo = table.Column<int>(type: "int", nullable: false),
                    ApplicationUserId = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TextWriteType", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TextWriteType_AspNetUsers_ApplicationUserId",
                        column: x => x.ApplicationUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "TextWriteInfo",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TextId = table.Column<int>(type: "int", nullable: false),
                    TextSize = table.Column<int>(type: "int", nullable: false),
                    TextWriteType = table.Column<int>(type: "int", nullable: false),
                    CorrectCharsCount = table.Column<int>(type: "int", nullable: false),
                    ErrorCharsCount = table.Column<int>(type: "int", nullable: false),
                    UnfixedErrorsCount = table.Column<int>(type: "int", nullable: false),
                    Miliseconds = table.Column<int>(type: "int", nullable: false),
                    CompletedCount = table.Column<int>(type: "int", nullable: false),
                    TextWriteTypeId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TextWriteInfo", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TextWriteInfo_TextWriteType_TextWriteTypeId",
                        column: x => x.TextWriteTypeId,
                        principalTable: "TextWriteType",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

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
                name: "IX_TextWriteInfo_TextWriteTypeId",
                table: "TextWriteInfo",
                column: "TextWriteTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_TextWriteType_ApplicationUserId",
                table: "TextWriteType",
                column: "ApplicationUserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TextWriteInfo");

            migrationBuilder.DropTable(
                name: "TextWriteType");

            migrationBuilder.DropColumn(
                name: "TypesInfoId",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<Guid>(
                name: "FreeTypesInfoId",
                table: "AspNetUsers",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<Guid>(
                name: "NormalTypesInfoId",
                table: "AspNetUsers",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateTable(
                name: "TextWriteTypeInfo",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ApplicationUserId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    ApplicationUserId1 = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    CorrectCharsCount = table.Column<int>(type: "int", nullable: false),
                    ErrorCharsCount = table.Column<int>(type: "int", nullable: false),
                    Miliseconds = table.Column<int>(type: "int", nullable: false),
                    TextId = table.Column<int>(type: "int", nullable: false),
                    TextSizeId = table.Column<int>(type: "int", nullable: false),
                    UnfixedErrorsCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TextWriteTypeInfo", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TextWriteTypeInfo_AspNetUsers_ApplicationUserId",
                        column: x => x.ApplicationUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_TextWriteTypeInfo_AspNetUsers_ApplicationUserId1",
                        column: x => x.ApplicationUserId1,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d4dad604-45e4-4ee7-b7b1-697bf7a623b2",
                column: "ConcurrencyStamp",
                value: "d11e1d0a-fb0a-4d92-8dbc-4e2eb3984b5d");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "dc086066-451d-4cb1-a1ad-933352eb82b4",
                column: "ConcurrencyStamp",
                value: "22c1b0ad-8e0d-4318-bc6a-9f97b2046ad6");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "215eedc8-7e86-46f6-88dc-6b052c4ed7b0",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "18e27169-9e27-4d01-b48b-00e22bc9c11f", "AQAAAAEAACcQAAAAEPs1QwmyCDsw4fUwQlrVT5+o2isOlWjaVLB4/x3KwuEQJDRQpFsUi7Q1mM04NdYkBg==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "f294e833-15e9-4066-8b41-61847ff6f0f7",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "a7690105-4b32-4eee-9c75-19edd6c507a1", "AQAAAAEAACcQAAAAEBkI2Z//v2gb4xj6ixCk5s183WTULWXobJcqxopvSJwaC/8DOKVySgFJ1VPIc80pIA==" });

            migrationBuilder.CreateIndex(
                name: "IX_TextWriteTypeInfo_ApplicationUserId",
                table: "TextWriteTypeInfo",
                column: "ApplicationUserId");

            migrationBuilder.CreateIndex(
                name: "IX_TextWriteTypeInfo_ApplicationUserId1",
                table: "TextWriteTypeInfo",
                column: "ApplicationUserId1");
        }
    }
}
