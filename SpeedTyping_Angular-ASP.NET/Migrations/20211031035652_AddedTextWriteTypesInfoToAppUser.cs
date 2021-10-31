using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SpeedTyping.Migrations
{
    public partial class AddedTextWriteTypesInfoToAppUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
                    TextId = table.Column<int>(type: "int", nullable: false),
                    TextSizeId = table.Column<int>(type: "int", nullable: false),
                    CorrectCharsCount = table.Column<int>(type: "int", nullable: false),
                    ErrorCharsCount = table.Column<int>(type: "int", nullable: false),
                    UnfixedErrorsCount = table.Column<int>(type: "int", nullable: false),
                    Miliseconds = table.Column<int>(type: "int", nullable: false),
                    ApplicationUserId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    ApplicationUserId1 = table.Column<string>(type: "nvarchar(450)", nullable: true)
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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TextWriteTypeInfo");

            migrationBuilder.DropColumn(
                name: "FreeTypesInfoId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "NormalTypesInfoId",
                table: "AspNetUsers");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d4dad604-45e4-4ee7-b7b1-697bf7a623b2",
                column: "ConcurrencyStamp",
                value: "7a012290-b04f-4028-943b-4c2b1f9a23bb");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "dc086066-451d-4cb1-a1ad-933352eb82b4",
                column: "ConcurrencyStamp",
                value: "77ecff95-2534-4305-8e6e-62d1182a668a");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "215eedc8-7e86-46f6-88dc-6b052c4ed7b0",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "92b81389-3559-490d-a4fa-48836bcadc32", "AQAAAAEAACcQAAAAEPM8/d75hImHboi/OGIhOres3vNNQETbLdzqO/DrJ9eZmNasS6hGUsBC7qvVqwDuaw==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "f294e833-15e9-4066-8b41-61847ff6f0f7",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "b5becb40-d7a9-4026-9191-7ba30ecab9ec", "AQAAAAEAACcQAAAAEBQ6wcgF21S8Anvuruzc68w3PH+6j8MKnFayO1y+Ew2DHVbh3IL+48svTDeeNWXTuQ==" });
        }
    }
}
