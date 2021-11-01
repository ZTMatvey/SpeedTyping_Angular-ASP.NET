using Microsoft.EntityFrameworkCore.Migrations;

namespace SpeedTyping.Migrations
{
    public partial class ChangedTextWriteTypeModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TextWriteTypeInfos_TextWriteTypes_TextWriteTypeId",
                table: "TextWriteTypeInfos");

            migrationBuilder.DropTable(
                name: "TextWriteTypes");

            migrationBuilder.DropIndex(
                name: "IX_TextWriteTypeInfos_TextWriteTypeId",
                table: "TextWriteTypeInfos");

            migrationBuilder.DropColumn(
                name: "TextWriteTypeId",
                table: "TextWriteTypeInfos");

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "TextWriteTypeInfos",
                type: "nvarchar(max)",
                nullable: true);

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserId",
                table: "TextWriteTypeInfos");

            migrationBuilder.AddColumn<int>(
                name: "TextWriteTypeId",
                table: "TextWriteTypeInfos",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "TextWriteTypes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ApplicationUserId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    TextWriteInfosId = table.Column<int>(type: "int", nullable: false),
                    TypeInfo = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TextWriteTypes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TextWriteTypes_AspNetUsers_ApplicationUserId",
                        column: x => x.ApplicationUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d4dad604-45e4-4ee7-b7b1-697bf7a623b2",
                column: "ConcurrencyStamp",
                value: "1117a68c-e9a2-4ea5-8278-a4f5a71de268");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "dc086066-451d-4cb1-a1ad-933352eb82b4",
                column: "ConcurrencyStamp",
                value: "db53e6c9-d570-40cb-af42-32c890dab525");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "215eedc8-7e86-46f6-88dc-6b052c4ed7b0",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "afc10ab3-3d33-4ef7-81e3-146afba23d60", "AQAAAAEAACcQAAAAEE9dCAJr5VwWHeQTxVFc1MJcf6AcC2k9Yj7+eGd9ZTCYQ4K3Cf1n3N7lPEiaLZeZXw==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "f294e833-15e9-4066-8b41-61847ff6f0f7",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "4f069b70-652c-421a-b06c-317e4d5a7fbf", "AQAAAAEAACcQAAAAEPdT2R+LzNgxmdcoBGVnzrF1y/NAZ26KaRvY9/O7ZO8t/o5s2q2Ht577ui6GgBa4+A==" });

            migrationBuilder.CreateIndex(
                name: "IX_TextWriteTypeInfos_TextWriteTypeId",
                table: "TextWriteTypeInfos",
                column: "TextWriteTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_TextWriteTypes_ApplicationUserId",
                table: "TextWriteTypes",
                column: "ApplicationUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_TextWriteTypeInfos_TextWriteTypes_TextWriteTypeId",
                table: "TextWriteTypeInfos",
                column: "TextWriteTypeId",
                principalTable: "TextWriteTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
