package com.pickfresh.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicUpdate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
@ToString
@DynamicUpdate
public class Crop {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cropId;
	
	private String cropName;
	private String cropCategory;
	private String cropColor;
	private double cropCost;
	private String cropPic;
	
}
