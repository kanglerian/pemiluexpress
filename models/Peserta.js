module.exports = (sequelize, DataTypes) => {
    const Peserta = sequelize.define('Peserta',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nim: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        nama_lengkap: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        kelas: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        prodi_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at',
            allowNull: false,
        }
    },{
        tableName: 'peserta',
        timestamps: true,
    });

    Peserta.associate = (models) => {
        Peserta.belongsTo(models.Prodi, {foreignKey: 'prodi_id'});
    }

    return Peserta;
}