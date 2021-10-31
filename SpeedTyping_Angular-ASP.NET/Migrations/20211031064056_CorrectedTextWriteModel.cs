using Microsoft.EntityFrameworkCore.Migrations;

namespace SpeedTyping.Migrations
{
    public partial class CorrectedTextWriteModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_TextWriteTypes_TextWriteTypesInfoId",
                table: "AspNetUsers");

            migrationBuilder.DropForeignKey(
                name: "FK_TextWriteInfo_TextWriteType_TextWriteTypeId",
                table: "TextWriteInfo");

            migrationBuilder.DropTable(
                name: "TextWriteType");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_TextWriteTypesInfoId",
                table: "AspNetUsers");

            migrationBuilder.DropPrimaryKey(
                name: "PK_TextWriteInfo",
                table: "TextWriteInfo");

            migrationBuilder.RenameTable(
                name: "TextWriteInfo",
                newName: "TextWriteTypeInfos");

            migrationBuilder.RenameColumn(
                name: "TextWriteTypesInfoId",
                table: "AspNetUsers",
                newName: "TypesInfoListId");

            migrationBuilder.RenameIndex(
                name: "IX_TextWriteInfo_TextWriteTypeId",
                table: "TextWriteTypeInfos",
                newName: "IX_TextWriteTypeInfos_TextWriteTypeId");

            migrationBuilder.AddColumn<string>(
                name: "ApplicationUserId",
                table: "TextWriteTypes",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "TextWriteInfosId",
                table: "TextWriteTypes",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TypeInfo",
                table: "TextWriteTypes",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_TextWriteTypeInfos",
                table: "TextWriteTypeInfos",
                column: "Id");

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

            migrationBuilder.AddForeignKey(
                name: "FK_TextWriteTypes_AspNetUsers_ApplicationUserId",
                table: "TextWriteTypes",
                column: "ApplicationUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TextWriteTypeInfos_TextWriteTypes_TextWriteTypeId",
                table: "TextWriteTypeInfos");

            migrationBuilder.DropForeignKey(
                name: "FK_TextWriteTypes_AspNetUsers_ApplicationUserId",
                table: "TextWriteTypes");

            migrationBuilder.DropIndex(
                name: "IX_TextWriteTypes_ApplicationUserId",
                table: "TextWriteTypes");

            migrationBuilder.DropPrimaryKey(
                name: "PK_TextWriteTypeInfos",
                table: "TextWriteTypeInfos");

            migrationBuilder.DropColumn(
                name: "ApplicationUserId",
                table: "TextWriteTypes");

            migrationBuilder.DropColumn(
                name: "TextWriteInfosId",
                table: "TextWriteTypes");

            migrationBuilder.DropColumn(
                name: "TypeInfo",
                table: "TextWriteTypes");

            migrationBuilder.RenameTable(
                name: "TextWriteTypeInfos",
                newName: "TextWriteInfo");

            migrationBuilder.RenameColumn(
                name: "TypesInfoListId",
                table: "AspNetUsers",
                newName: "TextWriteTypesInfoId");

            migrationBuilder.RenameIndex(
                name: "IX_TextWriteTypeInfos_TextWriteTypeId",
                table: "TextWriteInfo",
                newName: "IX_TextWriteInfo_TextWriteTypeId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_TextWriteInfo",
                table: "TextWriteInfo",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "TextWriteType",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TextWriteTypeInfosId = table.Column<int>(type: "int", nullable: true),
                    TypeInfo = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TextWriteType", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TextWriteType_TextWriteTypes_TextWriteTypeInfosId",
                        column: x => x.TextWriteTypeInfosId,
                        principalTable: "TextWriteTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

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
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "979ffff9-2573-4f62-9296-6e4d2b930fc6", "AQAAAAEAACcQAAAAEF2wrL6lH3IJ1FXS48CVmy0ILs/PcNqFJLDiTLVX0rNrttMh4cNNyViOTGNPLbB7nw==" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "f294e833-15e9-4066-8b41-61847ff6f0f7",
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "6429d67a-062f-4960-808b-3366e82e915f", "AQAAAAEAACcQAAAAEJC1dfSaVs2F7B3D0v8NONvpvrWJ1N9gspVC+DaR7k8mVZBIqBg4QHOWNHeH3lff8A==" });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_TextWriteTypesInfoId",
                table: "AspNetUsers",
                column: "TextWriteTypesInfoId");

            migrationBuilder.CreateIndex(
                name: "IX_TextWriteType_TextWriteTypeInfosId",
                table: "TextWriteType",
                column: "TextWriteTypeInfosId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_TextWriteTypes_TextWriteTypesInfoId",
                table: "AspNetUsers",
                column: "TextWriteTypesInfoId",
                principalTable: "TextWriteTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_TextWriteInfo_TextWriteType_TextWriteTypeId",
                table: "TextWriteInfo",
                column: "TextWriteTypeId",
                principalTable: "TextWriteType",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
