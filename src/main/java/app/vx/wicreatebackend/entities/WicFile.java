package app.vx.wicreatebackend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "files")
public class WicFile {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "wicfiles_generator")
    @SequenceGenerator(
            name = "wicfiles_generator",
            sequenceName = "wicfiles_sequence",
            allocationSize = 1,
            initialValue = 100000
    )
    private Long id;


    @Column(name = "original_file_name",nullable = false)
    private String originalFileName;

    @Column(name = "strored_file_name", nullable = false)
    private String storedFileName;

    @Column(name = "content_type")
    private String contentType;

    @Column(name = "file_path")
    private String filePath;

    @Column(name = "download_url")
    private String downloadURL;

    @Column(name = "file_size")
    private Long size;
}